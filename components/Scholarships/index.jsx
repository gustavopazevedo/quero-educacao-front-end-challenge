import styled from '@emotion/styled';

/** STYLED */
const StyledScholarships = styled.div`
	width: 100%;
	display: flex;
	margin-top: 32px;
`;

const StyledAddScholarship = styled.div`
	width: 100%;
	height: 199px;
	background-color: #fff;
	box-shadow: 0px 2px 5px 0px rgba(210, 210, 210, 1);
	padding: 116px 30px 30px 30px;
	cursor: pointer;
	position: relative;

	img {
		background-color: #f00;
	}

	h3 {
		width: 100%;
		font-size: 1.9rem;
		text-align: center;
		line-height: 100%;
		margin-bottom: 3px;
	}

	p {
		width: 100%;
		line-height: 150%;
		font-size: 1.3rem;
		text-align: center;
	}
`;

const StyledAddScholarshipIcon = styled.span`
	width: 64px;
	height: 64px;
	position: absolute;
	background: url('static/images/icons/icon-plus-circle.svg') no-repeat scroll center center;
	background-size: 64px auto;
	top: 24px;
	left: 50%;
	transform: translateX(-50%);
`; 
/** END STYLED */

function Scholarships({ items }) {
	return (
		<StyledScholarships>
			<StyledAddScholarship>
				<StyledAddScholarshipIcon />
				<h3>Adicionar bolsa</h3>
				<p>Clique para adicionar bolsas <br />de cursos do seu interesse</p>
			</StyledAddScholarship>
		</StyledScholarships>
	)
}

export default Scholarships;