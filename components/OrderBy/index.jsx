import styled from '@emotion/styled';

/** STYLED */
const StyledOrderBy = styled.div`
	width: auto;

	@media screen and (min-width: 1140px) {
		width: 50%;
		display: flex;
		align-items: center;
	}
`;

const StyledOrderByTitle = styled.span`
	width: 100%;
	text-align: right;
	display: block;
	font-size: 1.6rem;
	font-weight: bold;
	margin-bottom: 2px;
`;

const StyledOrdeBySelectWrapper = styled.div`
	width: 100%;
	height: 25px;
	position: relative;

	&:after {
		width: 20px;
		height: 25px;
		content: "";
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		background: #fff url('/static/images/icons/icon-down-arrow-secondary-blue.svg') no-repeat scroll center right;
		background-size: 12px auto;
	}

	select {
		width: 100%;
		height: 100%;
		outline: none;
		padding: 0 20px 0 8px;
		font-size: 1.6rem;
		font-weight: bold;
		color: var(--color-secondary-blue);
		background-color: transparent;
		border: none;
		border-radius: 5px;
		-moz-appearance: none;
		-webkit-appearance: none;
		appearance: none;
		
		&::-ms-expand {
			display: none;
		}
	}
`;
/** END STYLED */

function OrderBy({ defaultOption, label, onChange, options, value }) {
	return (
		<StyledOrderBy>
			<StyledOrderByTitle>{label}</StyledOrderByTitle>
			<StyledOrdeBySelectWrapper>
				<select onChange={(e) => onChange(e.target.value)} value={value}>
					{defaultOption ? <option hidden value={defaultOption.value}>{defaultOption.text}</option> : null}
					{options && options.map((option, index) => <option key={`option-${index}`} value={option.value}>{option.text}</option>)}
				</select>
			</StyledOrdeBySelectWrapper>

		</StyledOrderBy>
	)
}

export default OrderBy;