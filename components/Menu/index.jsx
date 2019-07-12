import { useState } from 'react';
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
		width: 19px;
		height: 100%;
		position: absolute;
		content: "";
		top: 0;
		right: 0;
		background: url('/static/images/icons/icon-down-arrow.svg') no-repeat scroll center right;
		background-size: 10px auto;
		transition: all 0.5s ease;

		${props => props.opened && css`
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

	${props => !props.opened && css`
		display: none;
	`}

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

		${props => props.current && css`
			background-color: var(--color-secondary-blue);
		`}
	}
`;

/** END STYLED */

function Menu() {
	const [opened, setOpened] = useState(false)

	return (
		<StyledMenu>
			<Container customCss={CssMenuContainer}>
				<Link href={process.env.HOME_URL}>
					<StyledMyAccountLink>Minha conta</StyledMyAccountLink>
				</Link>
				<StyledMenuButton opened={opened} onClick={() => setOpened(!opened)}>Menu</StyledMenuButton>
				<StyledMenuNav opened={opened}>
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