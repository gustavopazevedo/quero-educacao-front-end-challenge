import styled from '@emotion/styled';

/** LAYOUT */
import DefaultLayout from '@layouts/Default';
/** END LAYOUT */

/** COMPONENTS */
import Container from '@components/Container';
import SemesterFilter from '@components/SemesterFilter';
import Scholarships from '@components/Scholarships';
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
/** END STYLED */

function Home() {
	return (
		<DefaultLayout>
			<Container>
				<StyledTitle>Bolsas favoritas</StyledTitle>
				<StyledParagraph>Adicione bolsas de cursos e faculdades do seu interesse e receba atualizações com as melhores ofertas disponíveis.</StyledParagraph>
				<SemesterFilter items={[
					{ text: 'Todos os semestres', enrollment_semester: 0},
					{ text: '2º semestre de 2019', enrollment_semester: 2019.2 },
					{ text: '1º semestre de 2020', enrollment_semester: 2020.1 }
				]} />
				<Scholarships />
			</Container>
		</DefaultLayout>
	)
}

export default Home;