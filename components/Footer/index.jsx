import styled from '@emotion/styled';

/** COMPONENTS */
import Container from '@components/Container';
/** END COMPONENTS */

/** STYLED */
const StyledFooter = styled.footer`
	width: 100%;
	background-color: var(--color-main-blue);
`;

const StyledFooterTop = styled.div`
	width: 100%;
	background-color: var(--color-secondary-blue);
`;

const StyledFooterBottom = styled.div`
	width: 100%;
	height: 84px;
	display:  flex;
	align-items: center;

	p {
		width: 100%;
		color: #fff;
		display: block;
		font-weight: 700;
		font-size: 1.3rem;
		text-align: center;
	}
`;
/** END STYLED */

function Footer() {
	return (
		<StyledFooter>
			<StyledFooterTop>
				<Container>
					Footer
				</Container>
			</StyledFooterTop>
			<StyledFooterBottom>
				<Container>
					<p>Feito com pela Quero Educação</p>
				</Container>
			</StyledFooterBottom>
		</StyledFooter>
	)
}

export default Footer;