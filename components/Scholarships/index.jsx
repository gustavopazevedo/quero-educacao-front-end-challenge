import { connect } from 'react-redux';
import styled from '@emotion/styled';

/** STYLED */
const StyledScholarships = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	margin-top: 32px;
`;

const StyledScholarshipsAdd = styled.div`
	width: 100%;
	height: 199px;
	background-color: #fff;
	box-shadow: 0px 2px 5px 0px rgba(210, 210, 210, 1);
	cursor: pointer;
	position: relative;
	display: flex;
	justify-content: center;
	align-content: center;
	flex-wrap: wrap;

	img {
		background-color: #f00;
	}

	h3 {
		width: 100%;
		font-size: 1.9rem;
		text-align: center;
		line-height: 100%;
		margin-bottom: 3px;
		user-select: none;
	}

	p {
		width: 100%;
		line-height: 150%;
		font-size: 1.3rem;
		text-align: center;
		user-select: none;
	}
`;

const StyledScholarshipsAddIcon = styled.span`
	width: 64px;
	height: 64px;
	position: relative;
	background: url('static/images/icons/icon-plus-circle.svg') no-repeat scroll center center;
	background-size: 64px auto;
	display: block;
	margin-bottom: 19px;
`;

const StyledScholarshipsItem = styled.div`
	width: 100%;
	height: auto;
	padding: 20px 16px 16px 16px;
	background-color: #fff;
	box-shadow: 0px 2px 5px 0px rgba(210, 210, 210, 1);
	position: relative;
	margin-top: 24px;
`;
/** END STYLED */

function Scholarships({ items, onAdd }) {
	return (
		<StyledScholarships>
			<StyledScholarshipsAdd onClick={() => onAdd()}>
				<StyledScholarshipsAddIcon />
				<h3>Adicionar bolsa</h3>
				<p>Clique para adicionar bolsas <br />de cursos do seu interesse</p>
			</StyledScholarshipsAdd>
			{items && items.map((item, index) => (
				<StyledScholarshipsItem key={`scholarships-item-${index}`}>
					<p>{item.discount_percentage}</p>
				</StyledScholarshipsItem>
			))}
		</StyledScholarships>
	)
}

export default Scholarships;