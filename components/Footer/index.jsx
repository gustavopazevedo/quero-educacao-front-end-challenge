import styled from '@emotion/styled';
import { css } from '@emotion/core';

/** COMPONENTS */
import Container from '@components/Container';
import Contact from '@components/Contact';
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

const StyledContainerFooterTop = css`
	width: 100%;
`;

const StyledFooterBottom = styled.div`
	width: 100%;
	height: 84px;
	display:  flex;
	align-items: center;

	p {
		width: 100%;
		color: #fff;
		display: flex;
		font-weight: 700;
		font-size: 1.3rem;
		justify-content: center;
	}
`;

const StyledMadeWitLove = styled.span`
	width: 16px;
	height: 16px;
	background: url('static/images/icons/icon-heart.svg') no-repeat scroll center center;
	background-size: 16px auto;
	display: block;
	margin: 0 5px;
`;
/** END STYLED */

function Footer() {
	return (
		<StyledFooter>
			<StyledFooterTop>
				<Container customCss={StyledContainerFooterTop}>
					<Contact />
				</Container>
			</StyledFooterTop>
			<StyledFooterBottom>
				<Container>
					<p>Feito com <StyledMadeWitLove /> pela Quero Educação</p>
				</Container>
			</StyledFooterBottom>
		</StyledFooter>
	)
}

export default Footer;