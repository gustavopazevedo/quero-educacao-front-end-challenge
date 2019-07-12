import { useState } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
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

function SemesterFilter({ items }) {
	const [semester, setSemester] = useState(0)

	return (
		<StyledSemesterFilter>
			{items && items.map(item => (
				<StyledSemesterFilterItem
					key={uuidv4()}
					selected={semester === item.enrollment_semester}
					onClick={() => setSemester(item.enrollment_semester)}
				>
					{item.text}
				</StyledSemesterFilterItem>
			))}
		</StyledSemesterFilter>
	)
}

export default SemesterFilter;