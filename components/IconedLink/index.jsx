import { css } from '@emotion/core';
import styled from '@emotion/styled';

/** NEXT.JS */
import Link from 'next/link';
/** END NEXT.JS */

/** STYLED */
const StyledIconedLink = styled.a`
	width: 64px;
	height: 44px;
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	font-weight: 700;
	font-size: 1.3rem;
	color: var(--color-secondary-blue);
	padding-top: 28px;
	padding-bottom: 1px;
	user-select: none;

	${props => props.border && css`
		border-${props.border}: 2px solid #eeefef;
	`}

	${props => props.icon && css`
		&:before {
			width: 24px;
			height: 24px;
			top: 1px;
			position: absolute;
			content: "";
			display: block;
			background: url('/static/images/icons/icon-${props.icon}-${props.color ? props.color : 'secondary-blue'}.svg') no-repeat scroll center center;
			background-size: 24px auto;
		}
	`}

	${props => props.iconPosition === 'left' && css`
		width: auto;
		height: 24px;
		padding-top: unset;
		padding-bottom: unset;
		padding-left: 32px;
		font-size: 1.6rem;

		&:before {
			top: 0;
			left: 0;
		}
	`}

	${props => props.iconPosition === 'right' && css`
		width: auto;
		height: 24px;
		padding-top: unset;
		padding-bottom: unset;
		padding-right: 32px;
		font-size: 1.6rem;

		&:before {
			top: 0;
			right: 0;
		}
	`}
`;
/** END STYLED */

function IconedLink({ border, icon, iconPosition, link, text }) {
	return (
		<Link href={link}>
			<StyledIconedLink border={border} icon={icon} iconPosition={iconPosition}>
				{text}
			</StyledIconedLink>
		</Link>
	)
}

export default IconedLink;