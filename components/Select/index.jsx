import styled from '@emotion/styled';

/** STYLED */
const StyledSelectWrapper = styled.div`
	width: 100%;

	${props => props.customCss}
`;

const StyledSelectLabel = styled.label`
	width: 100%;
	display: block;
	font-size: 1.3rem;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 3px;
`;

const StyledSelect = styled.div`
	width: 100%;
	height: 48px;
	position: relative;
	border: 1px solid #cacccd;
	border-radius: 5px;

	&:after {
		width: 34px;
		height: 44px;
		content: "";
		display: block;
		position: absolute;
		top: 2px;
		right: 1px;
		background: #fff url('/static/images/icons/icon-down-arrow-gray.svg') no-repeat scroll center left 12px;
		background-size: 10px auto;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	select {
		width: 100%;
		height: 100%;
		outline: none;
		padding: 0 34px 0 11px;
		font-size: 1.6rem;
		background-color: #fff;
		border: none;
		border-radius: 5px;
	}
`;
/** END STYLED */

function Select({ customCss, label, onChange, options, value }) {
	return (
		<StyledSelectWrapper customCss={customCss}>
			<StyledSelectLabel>{label}</StyledSelectLabel>
			<StyledSelect>
				<select onChange={(e) => onChange(e.target.value)} value={value}>
					{options.map(option => <option value={option.value}>{option.text}</option>)}
				</select>
			</StyledSelect>
		</StyledSelectWrapper>
	)
}

export default Select;