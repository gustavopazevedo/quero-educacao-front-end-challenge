import { css } from '@emotion/core';
import styled from '@emotion/styled';

/** STYLED */
const StyledButton = styled.button`
	width: auto;
	height: 48px;
	font-size: 1.6rem;
	font-weight: 700;
	outline: none;
	background-color: var(--color-main-yellow);
	border: 1px solid var(--color-secondary-yellow);
	border-radius: 5px;
	padding: 0 25px;
	cursor: pointer;
	user-select: none;

	${props => props.appearance && css`
		background-color: transparent;
		border-color: var(--color-secondary-blue);
		color: var(--color-secondary-blue);
	`}

	&:disabled {
		color: #83888a;
		background-color: #cacccd;
		border-color: #a6a9aa;
		pointer-events: none;
	}

`;
/** END STYLED */

function Button(props) {
	return (
		<StyledButton {...props}>{props.children}</StyledButton>
	)
}

export default Button;