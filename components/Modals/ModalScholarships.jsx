import { useState } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

/** HOC'S */
import withModal from '@hocs/withModal';
/** END HOC'S */

/** COMPONENTS */
import Filters from '@components/Filters';
import ScholarshipsResults from '@components/ScholarshipsResults';
import Button from '@components/Button';
/** END COMPONENTS */

/** STYLED */
const StyledModalScholarships = styled.div`
	background-color: #fff;
	padding: 24px;
`;

const StyledModalScholarshipsTitle = styled.h2`
	font-size: 2.3rem;
	font-weight: 700;
	margin-bottom: 4px;
`;

const StyledModalScholarshipsSubtitle = styled.p`
	font-size: 1.6rem;
`;

const StyledModalScholarshipsButtons = styled.div`
	width: 100%;
	padding-top: 24px;
	display: flex;
	justify-content: space-between;
`;
/** END STYLED */

function ModalScholarships({ customCss, scholarships, onClose }) {
	const [filters, setFilters] = useState([])

	return (
		<StyledModalScholarships customCss={customCss}>
			<StyledModalScholarshipsTitle>Adicionar bolsa</StyledModalScholarshipsTitle>
			<StyledModalScholarshipsSubtitle>Filtre e adicione as bolsas de seu interesse.</StyledModalScholarshipsSubtitle>
			<Filters onChange={f => setFilters(f)} />
			<ScholarshipsResults filters={filters} onSelect={items => console.log(item)} />
			<StyledModalScholarshipsButtons>
				<Button appearance={'cancel'} onClick={() => onClose()}>Cancelar</Button>
				<Button disabled={true}>Adicionar bolsa(s)</Button>
			</StyledModalScholarshipsButtons>
		</StyledModalScholarships>
	)
}

export default connect(
	store => ({
		scholarships: store.scholarships
	})
)(withModal(ModalScholarships));