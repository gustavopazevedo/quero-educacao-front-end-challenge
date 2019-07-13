import styled from '@emotion/styled';

/** COMPONENTS */
import Label from '@components/Label';
/** END COMPONENTS */

/** STYLED */
const StyledRange = styled.div`
	width: 100%;
`;

const StyledRangeInput = styled.input`
	width: 100%;
	-webkit-appearance: none;
	outline: none;
	padding-top: 15px;

	/** CHROME */
	&::-webkit-slider-runnable-track {
		width: 100%;
		height: 4px;
		-webkit-appearance: none;
		border-radius: 2px;
		background-color: var(--color-main-blue);
		margin: 12px 0;
	}

	&::-webkit-slider-thumb {
		width: 28px;
		height: 28px;
		border-radius: 14px;
		border: 2px solid var(--color-main-blue);
		background-color: #fff;
		-webkit-appearance: none;
		margin-top: -12px;
	}

	/** FIREFOX */
	&::-moz-range-track {
		width: 100%;
		height: 4px;
		border-radius: 2px;
		background-color: var(--color-main-blue);
		margin: 12px 0;
	}

	&::-moz-range-thumb {
		width: 28px;
		height: 28px;
		border-radius: 14px;
		border: 2px solid var(--color-main-blue);
		background-color: #fff;
		margin-top: -12px;
	}

	/** INTERNET EXPLORER */
	&::-ms-track {
		width: 100%;
		height: 4px;
		border-radius: 2px;
		background-color: var(--color-main-blue);
		margin: 12px 0;
	}

	&::-ms-thumb {
		width: 28px;
		height: 28px;
		border-radius: 14px;
		border: 2px solid var(--color-main-blue);
		background-color: #fff;
		margin-top: -12px;
	}
`;

const StyledRangeValue = styled.span`
	width: 100%;
	font-size: 1.6rem;
	display: block;
	padding-top: 3px;
`;
/** END STYLED */

function Range({ label, max, min, onChange, value }) {
	return (
		<StyledRange>
			<Label>{label}</Label>
			<StyledRangeValue>R${value}</StyledRangeValue>
			<StyledRangeInput type="range" min={min} max={max} value={value} onChange={e => onChange(e)} />
		</StyledRange>
	)
}

export default Range;