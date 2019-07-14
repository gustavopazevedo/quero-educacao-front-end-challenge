import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

/** ACTIONS */
import actions from '@actions';
/** END ACTIONS */

/** LAYOUT */
import DefaultLayout from '@layouts/Default';
/** END LAYOUT */

/** COMPONENTS */
import Container from '@components/Container';
import SemesterFilter from '@components/SemesterFilter';
import Scholarships from '@components/Scholarships';
import ModalScholarships from '@components/Modals/ModalScholarships';
/** END COMPONENTS */

/** STYLED */
const StyledTitle = styled.h2`
	width: 100%;
	font-size: 3.3rem;
	margin-bottom: 10px;
`;

const StyledParagraph = styled.p`
	width: 100%;
	font-size: 1.6rem;
	line-height: 150%;
`;

const CssModalScholarships = css`
	width: 100%;
	position: absolute;
`;
/** END STYLED */

function Home({ favoriteScholarships }) {
	const [isModalOpened, setIsModalOpened] = useState(false);
	const [items, setItems] = useState([])
	const [selectedSemester, setSelectedSemester] = useState(0)

	useEffect(() => {
		const storage = JSON.parse(localStorage.getItem('quero-educacao-scholarships'))
		
		if (storage && storage.length) {
			setItems(storage)
		}
	}, [])

	useEffect(() => {
		if (favoriteScholarships.isFulfilled) {
			setItems(favoriteScholarships.data);
			localStorage.setItem('quero-educacao-scholarships', JSON.stringify(favoriteScholarships.data))
		}
	}, [favoriteScholarships])

	useEffect(() => {
		localStorage.setItem('quero-educacao-scholarships', JSON.stringify(items))
	}, [items])

	return (
		<DefaultLayout>
			<Container>
				<StyledTitle>Bolsas favoritas</StyledTitle>
				<StyledParagraph>Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas disponíveis.</StyledParagraph>
				<SemesterFilter onSelect={s => setSelectedSemester(s)} />
				<Scholarships
					items={items}
					onAdd={() => setIsModalOpened(true)}
					onExclude={(index) => setItems(items.filter((item, i) => i !== index))}
				/>
			</Container>
			<ModalScholarships
				customCss={CssModalScholarships}
				isOpened={isModalOpened}
				onClose={() => setIsModalOpened(false)}
			/>
		</DefaultLayout>
	)
}

Home.getInitialProps = async ({ store }) => {
	const scholarships = await store.dispatch(actions.getScholarships())

	return {
		scholarships: scholarships
	}
}

export default connect(
	store => ({
		favoriteScholarships: store.favoriteScholarships
	})
)(Home);