import { useState } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

/** HOC'S */
import withModal from '@hocs/withModal';
/** END HOC'S */

/** COMPONENTS */
import Filters from '@components/Filters';
import ScholarshipsResults from '@components/ScholarshipsResults';
/** END COMPONENTS */

/** STYLED */
const StyledModalScholarships = styled.div`
	background-color: #fff;
	padding: 24px;
`;

const StyledModalTitle = styled.h2`
	font-size: 2.3rem;
	font-weight: 700;
	margin-bottom: 4px;
`;

const StyledModalSubtitle = styled.p`
	font-size: 1.6rem;
`;
/** END STYLED */

function ModalScholarships({ customCss, scholarships }) {
	const [filters, setFilters] = useState([])

	return (
		<StyledModalScholarships customCss={customCss}>
			<StyledModalTitle>Adicionar bolsa</StyledModalTitle>
			<StyledModalSubtitle>Filtre e adicione as bolsas de seu interesse.</StyledModalSubtitle>
			<Filters onChange={f => setFilters(f)} />
			<ScholarshipsResults filters={filters} />
		</StyledModalScholarships>
	)
}

export default connect(
	store => ({
		scholarships: store.scholarships
	})
)(withModal(ModalScholarships));