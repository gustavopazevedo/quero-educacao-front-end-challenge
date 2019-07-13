import styled from '@emotion/styled';

/** STYLED */
const StyledLabel = styled.label`
	width: 100%;
	display: block;
	font-size: 1.3rem;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 3px;

    ${props => props.customCss}
`;
/** END STYLED */

function Label({ children, customCss }) {
    return (
        <StyledLabel customCss={customCss}>{children}</StyledLabel>
    )
}

export default Label 