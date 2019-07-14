import { css } from '@emotion/core';
import styled from '@emotion/styled';

/** STYLED */
const StyledCheckbox = styled.span`
	display: inline-flex;
	margin-right: 25px;

	&:last-of-type {
		margin-right: 0;
	}
`;

const StyledCheckboxLabel = styled.label`
	min-height: 16px;
	line-height: 1.6rem;
	font-size: 1.6rem;
	position: relative;
	padding-left: 16px;
	display: block;
	text-indent: 9px;

	&:before {
		width: 16px;
		height: 16px;
		position: absolute;
		top: 0;
		left: 0;
		content: "";
		display: block;
		border: 1px solid #293133;
		border-radius: 2px;

		${props => props.checked && css`
			border: none;
			background: var(--color-main-blue) url('/static/images/icons/icon-check.svg') no-repeat scroll center center;
			background-size: 10px auto;
		`}

	}
`;

const StyledCheckboxInput = styled.input`
	width: 16px;
	height: 16px;
	opacity: 0.01;
	position: absolute;
	top: 0;
	left: 0;
`;
/** END STYLED */

function Checkbox({ checked, label, value, onChange }) {
	return (
		<StyledCheckbox>
			<StyledCheckboxLabel checked={checked}>
				<StyledCheckboxInput type="checkbox" value={value} checked={checked} onChange={(e) => onChange(e)} />
				{label ? label : null}
			</StyledCheckboxLabel>
		</StyledCheckbox>
	)
}

export default Checkbox;