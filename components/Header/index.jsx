import Media from 'react-media';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

/** NEXT.JS */
import Link from 'next/link';
/** END NEXT.JS */

/** COMPONENTS */
import Container from '@components/Container';
import IconedLink from '@components/IconedLink';
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

	@media screen and (min-width: 1140px) {
		height: 80px;
	}
`;

const CssHeaderContainer = css`
	display: flex;
	flex-wrap: wrap;
	align-items: center;

	@media screen and (max-width: 1140px) {
		width: 100%;
	}
`;

const StyledBrand = styled.h1`
	width: 115px;
	display: block;
	margin: 0 auto;

	@media screen and (min-width: 1140px) {
		width: 140px;
	}

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
				<Media query={'(min-width: 1140px)'}>
					{matches =>
						matches
						? <IconedLink icon={'info-circle'} iconPosition={'left'} link={'/'} text={'Como funciona'} />
						: <IconedLink border={'right'} icon={'info-circle'} link={'/'} text={'Ajuda'} />
					}
				</Media>
				<StyledBrand>
					<Link href={process.env.HOME_URL}>
						<a>
							<img src="/static/images/brand-quero-educacao.svg" />
						</a>
					</Link>
				</StyledBrand>
				<Media query={'(min-width: 1140px)'}>
					{matches =>
						matches
						? <IconedLink icon={'user-circle'} iconPosition={'right'} link={'/'} text={'Gustavo Azevedo'} />
						: <IconedLink border={'left'} icon={'user-circle'} link={'/'} text={'Conta'} />
					}
				</Media>
			</Container>
		</StyledHeader>
	)
}

export default Header;