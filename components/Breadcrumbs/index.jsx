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
const CssBreadcrumbsContainer = css`
	margin: 24px auto 25px auto;

	@media screen and (min-width: 1140px) {
		margin-bottom: 40px;
	}
`;

const StyledBreadcrumbs = styled.nav`
	width: 100%;

	ul {
		width: 100%;
		display: flex;
		align-items: center;
	}
`;

const StyledBreadcrumbsItem = styled.li`
	list-style-type: none;
	padding: 0 10px;

	${props => props.separator && css`
		padding: 0;
	`}

	&:first-child {
		padding-left: 0;
	}

	a {
		height: 20px;
		font-size: 13px;
		font-weight: 700;
		color: var(--color-secondary-blue);
		padding-left: 19px;
		position: relative;
		text-decoration: none;
		display: flex;
		align-items: center;

		@media screen and (min-width: 1140px) {
			padding-left: 0;
		}

		&:before {
			width: 19px;
			height: 100%;
			position: absolute;
			content: "";
			top: 0;
			left: 0;
			background: url('/static/images/icons/icon-left-arrow.svg') no-repeat scroll center left;
			background-size: auto 12px;

			@media screen and (min-width: 1140px) {
				display: none;
			}
		}
	}

	span {
		display: block;
		font-size: 1.3rem;
	}
`;

/** END STYLED */

function Breadcrumbs() {
	return (
		<Container customCss={CssBreadcrumbsContainer}>
			<StyledBreadcrumbs>
			<Media query={'(min-width: 1140px)'}>
				{matches =>
					matches
						? (
							<ul>
								<StyledBreadcrumbsItem>
									<Link href="/">
										<a>Home</a>
									</Link>
								</StyledBreadcrumbsItem>
								<StyledBreadcrumbsItem separator={true}>
									<span>/</span>
								</StyledBreadcrumbsItem>
								<StyledBreadcrumbsItem>
									<Link href="/">
										<a>Minha conta</a>
									</Link>
								</StyledBreadcrumbsItem>
								<StyledBreadcrumbsItem separator={true}>
									<span>/</span>
								</StyledBreadcrumbsItem>
								<StyledBreadcrumbsItem>
									<span>Bolsas favoritas</span>
								</StyledBreadcrumbsItem>
							</ul>
						)
						: (
							<ul>
								<StyledBreadcrumbsItem>
									<Link href="/">
										<a>Minha conta</a>
									</Link>
								</StyledBreadcrumbsItem>
							</ul>
						)
				}
			</Media>
			</StyledBreadcrumbs>
		</Container>
	)
}

export default Breadcrumbs;