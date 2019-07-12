import styled from '@emotion/styled';
import { css } from '@emotion/core';
import uuidv4 from 'uuid/v4';

/** STYLED */
const StyledSemesterFilter = styled.ul`
	width: 100%;
	height: auto;
	border: 1px solid var(--color-secondary-blue);
	border-radius: 5px;
	margin-top: 32px;
`;

const StyledSemesterFilterItem = styled.li`
	width: 100%;
	height: 47px;
	display: flex;
	border-bottom: 1px solid var(--color-secondary-blue);
	color: var(--color-secondary-blue);
	list-style-type: none;
	font-size: 1.6rem;
	font-weight: 700;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	user-select: none;

	${props => props.selected && css`
		background-color: var(--color-secondary-blue);
		color: #fff;
	`}

	&:last-of-type {
		border-bottom: none;
	}
`;
/** END STYLED */

function SemesterFilter() {
	return (
		<StyledSemesterFilter>
			<StyledSemesterFilterItem key={uuidv4()} selected>Todos os semestres</StyledSemesterFilterItem>
			<StyledSemesterFilterItem key={uuidv4()}>2º semestre de 2019</StyledSemesterFilterItem>
			<StyledSemesterFilterItem key={uuidv4()}>1º semestre de 2020</StyledSemesterFilterItem>
		</StyledSemesterFilter>
	)
}

export default SemesterFilter;