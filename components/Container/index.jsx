import styled from '@emotion/styled';

/** STYLED */
const StyledContainer = styled.div`
	width: calc(100% - 32px);
	margin: 0 auto;

	${props => props.customCss}
`;
/** END STYLED */

function Container({ children, customCss }) {
	return (
		<StyledContainer customCss={customCss}>{children}</StyledContainer>
	)
}

export default Container;