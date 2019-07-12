import { css } from '@emotion/core';
import styled from '@emotion/styled';

/** NEXT.JS */
import Link from 'next/link';
/** END NEXT.JS */

/** COMPONENTS */
import Container from '@components/Container';
/** END COMPONENTS */

/** STYLED */
const StyledHeader = styled.header`
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	position: relative;
	background-color: #fff;
	box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15);
	z-index: 99;
`;

const CssHeaderContainer = css`
	@media screen and (max-width: 1140px) {
		width: 100%;
	}
`;

const StyledBrand = styled.h1`
	width: 115px;
	display: block;
	margin: 0 auto;

	a {
		display: block;
	}

	img {
		width: 100%;
		height: auto;
		display: block;
	}
`;
/** END STYLED */

function Header() {
	return (
		<StyledHeader>
			<Container customCss={CssHeaderContainer}>
				<StyledBrand>
					<Link href={process.env.HOME_URL}>
						<a>
							<img src="/static/images/brand-quero-educacao.svg" />
						</a>
					</Link>
				</StyledBrand>
			</Container>
		</StyledHeader>
	)
}

export default Header;