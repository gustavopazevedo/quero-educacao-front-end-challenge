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

	@media screen and (min-width: 1140px) {
		padding: 30px;
	}
`;

const StyledModalScholarshipsTitle = styled.h2`
	font-size: 2.3rem;
	font-weight: 700;
	margin-bottom: 4px;

	@media screen and (min-width: 1140px) {
		padding: 2.8px;
	}
`;

const StyledModalScholarshipsSubtitle = styled.p`
	font-size: 1.6rem;
`;
/** END STYLED */

function ModalScholarships({ customCss, onClose }) {
	const [filters, setFilters] = useState([])

	return (
		<StyledModalScholarships customCss={customCss}>
			<StyledModalScholarshipsTitle>Adicionar bolsa</StyledModalScholarshipsTitle>
			<StyledModalScholarshipsSubtitle>Filtre e adicione as bolsas de seu interesse.</StyledModalScholarshipsSubtitle>
			<Filters onChange={f => setFilters(f)} />
			<ScholarshipsResults
				filters={filters}
				onCloseModal={() => onClose()}
			/>
		</StyledModalScholarships>
	)
}

export default withModal(ModalScholarships)