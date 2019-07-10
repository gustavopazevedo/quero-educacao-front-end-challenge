import styled from '@emotion/styled';

/** STYLED */
const StyledContainer = styled.div`
	width: calc(100% - 32px);
	margin: 0 auto;
`;
/** END STYLED */

function Container({ children }) {
	return (
		<StyledContainer>{children}</StyledContainer>
	)
}

export default Container;