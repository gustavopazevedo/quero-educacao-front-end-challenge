import { css } from '@emotion/core';
import styled from '@emotion/styled';

/** STYLED */
const StyledScore = styled.span`
	width: 90px;
	display: flex;
	justify-content: space-between;
	margin: 0 10px;
`;

const StyledScoreStar = styled.span`
	width: 14px;
	height: 14px;
	display: block;
	background: url('/static/images/icons/icon-bordered-star.svg') no-repeat scroll center center;
	background-size: auto 100%;

	${props => props.type === 'half' && css`
		background: url('/static/images/icons/icon-half-star.svg') no-repeat scroll center center;
		background-size: auto 100%;
	`}

	${props => props.type === 'full' && css`
		background: url('/static/images/icons/icon-star.svg') no-repeat scroll center center;
		background-size: auto 100%;
	`}
`;
/** END STYLED */

function Score({ score, max }) {
	const integer = Math.floor(score/1);
	const rest = score % 1;

	return (
		<StyledScore>
			{[...new Array(max)].map((item, index) => {
				if (index + 1 <= integer) {
					return <StyledScoreStar key={`score-star-${index}`} type={'full'} />
				} else if (rest > 0) {
					return <StyledScoreStar key={`score-star-${index}`} type={'half'} />
				} else {
					return <StyledScoreStar key={`score-star-${index}`} />
				}
			})}
		</StyledScore>
	)
}

export default Score;