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
	padding: 28px 0 1px 0;
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
`;
/** END STYLED */

function IconedLink({ border, icon, link, text }) {
	return (
		<Link href={link}>
			<StyledIconedLink border={border} icon={icon}>
				{text}
			</StyledIconedLink>
		</Link>
	)
}

export default IconedLink;