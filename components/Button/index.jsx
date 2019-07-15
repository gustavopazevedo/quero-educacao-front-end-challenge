import { css } from '@emotion/core';
import styled from '@emotion/styled';

/** STYLED */
const StyledButton = styled.button`
	width: auto;
	min-width: 162px;
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

	@media screen and (min-width: 1140px) {
		min-width: 122px;
		height: 32px;
		padding: 0 15px;
	}

	${props => props.appearance === 'cancel' && css`
		min-width: 114px;
		background-color: transparent;
		border-color: var(--color-secondary-blue);
		color: var(--color-secondary-blue);

		@media screen and (min-width: 1140px) {
			min-width: 86px;
		}
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