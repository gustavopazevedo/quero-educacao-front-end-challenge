import styled from '@emotion/styled';

/** COMPONENTS */
import SingleScholarship from '@components/SingleScholarship';
/** END COMPONENTS */

/** STYLED */
const StyledScholarships = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	margin-top: 32px;
`;

const StyledAddScholarship = styled.div`
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

const StyledAddScholarshipIcon = styled.span`
	width: 64px;
	height: 64px;
	position: relative;
	background: url('static/images/icons/icon-plus-circle.svg') no-repeat scroll center center;
	background-size: 64px auto;
	display: block;
	margin-bottom: 19px;
`;

const StyledSelectedScholarships = styled.div`
	width: 100%;
	margin-top: 24px;
`;
/** END STYLED */

function Scholarships({ items, onAdd }) {
	return (
		<StyledScholarships>
			<StyledAddScholarship onClick={() => onAdd()}>
				<StyledAddScholarshipIcon />
				<h3>Adicionar bolsa</h3>
				<p>Clique para adicionar bolsas <br />de cursos do seu interesse</p>
			</StyledAddScholarship>
			{items ? (
				<StyledSelectedScholarships>
					<SingleScholarship />
				</StyledSelectedScholarships>
			) : null }

		</StyledScholarships>
	)
}

export default Scholarships;