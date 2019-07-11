import styled from '@emotion/styled';

/** STYLED */
const StyledContainer = styled.div`
	width: calc(100% - 32px);
	margin: 0 auto;

	@media screen and (min-width: 1140px) {
		width: 1140px;
	}

	${props => props.customCss}
`;
/** END STYLED */

function Container({ children, customCss }) {
	return (
		<StyledContainer customCss={customCss}>{children}</StyledContainer>
	)
}

export default Container;