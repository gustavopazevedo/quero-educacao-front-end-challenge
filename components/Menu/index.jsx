import { useState } from 'react';
import Media from 'react-media';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

/** NEXT.JS */
import Link from 'next/link';
/** END NEXT.JS */

/** COMPONENTS */
import Container from '@components/Container';
/** END COMPONENTS */

/** STYLED */
const StyledMenu = styled.div`
	width: 100%;
	height: 40px;
	background-color: var(--color-main-blue);
	display: flex;
	position: relative;
	z-index: 9;
`;

const CssMenuContainer = css`
	width: 100%;
	display: flex;
	position: relative;
	justify-content: space-between;
	align-items: center;
	
	@media screen and (min-width: 1140px) {
		justify-content: flex-start;
	}
`;

const StyledMyAccountLink = styled.a`
	height: 40px;
	font-size: 1.6rem;
	font-weight: 700;
	color: #fff;
	display: flex;
	align-items: center;
	margin-left: 16px;
	cursor: pointer;

	@media screen and (min-width: 1140px) {
		font-size: 1.9rem;
		margin-left: unset;
	}
`;

const StyledMenuButton = styled.button`
	height: 40px;
	font-size: 1.6rem;
	font-weight: 700;
	color: #fff;
	padding-right: 19px;
	display: flex;
	align-items: center;
	cursor: pointer;
	border: none;
	background: transparent;
	outline: none;
	position: relative;
	margin-right: 16px;

	&:before {
		width: 10px;
		height: 100%;
		position: absolute;
		content: "";
		top: 0;
		right: 0;
		background: url('/static/images/icons/icon-down-arrow.svg') no-repeat scroll center center;
		background-size: 10px auto;
		transition: all 0.5s ease;

		${props => props.isOpened && css`
			transform: rotate(180deg);
			background-position-x: left;
			transition: all 0.5s ease;
		`}

		@media screen and (min-width: 1140px) {
			display: none;
		}
	}
`;

const StyledMenuNav = styled.nav`
	width: 100%;
	position: absolute;
	top: 100%;
	right: 0;
	background-color: var(--color-main-blue);

	@media screen and (min-width: 1140px) {
		width: auto;
		position: relative;
		top: unset;
		right: unset;
		display: flex;
		flex-wrap: wrap;
		margin-left: 23px;
	}

	@media screen and (max-width: 1139px) {
		${props => !props.isOpened && css`
			display: none;
		`}
	}

	ul {
		width: 100%;
	}
`;

const StyledMenuNavItem = styled.li`
	position: relative;
	list-style-type: none;
	border-top: 1px solid rgba(255, 255, 255, 0.25);

	a {
		width: 100%;
		height: 39px;
		line-height: 39px;
		display: block;
		text-decoration: none;
		text-align: right;
		padding: 0 16px;
		color: #fff;
		font-size: 1.6rem;
		
		@media screen and (min-width: 1140px) {
			padding: 0 25px;
			font-weight: 700;
		}

		${props => props.current && css`
			background-color: var(--color-secondary-blue);
		`}
	}
`;

/** END STYLED */

function Menu() {
	const [isOpened, setIsOpened] = useState(false)

	return (
		<StyledMenu>
			<Container customCss={CssMenuContainer}>
				<Link href={process.env.HOME_URL}>
					<StyledMyAccountLink>Minha conta</StyledMyAccountLink>
				</Link>
				<Media query={'(max-width: 1140px)'} render={() => {
					return (
						<StyledMenuButton isOpened={isOpened} onClick={() => setIsOpened(!isOpened)}>Menu</StyledMenuButton>
					)
				}} />
				<StyledMenuNav isOpened={isOpened}>
					<StyledMenuNavItem>
						<Link href={process.env.HOME_URL}>
							<a>Pré-matrículas</a>
						</Link>
					</StyledMenuNavItem>
					<StyledMenuNavItem current>
						<Link href={process.env.HOME_URL}>
							<a>Bolsas Favoritas</a>
						</Link>
					</StyledMenuNavItem>
				</StyledMenuNav>
			</Container>
		</StyledMenu>
	)
}

export default Menu;