import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
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

function SemesterFilter({ scholarships, onSelect }) {
	const [selectedSemester, setSelectecSemester] = useState(0)

	useEffect(() => {
		onSelect(selectedSemester)
	}, [selectedSemester])

	function getSemesters() {
		if (scholarships.isFulfilled) {
			const semestersArr = [...new Set(scholarships.data.map(item => item.enrollment_semester))]

			const semesters = semestersArr.map(item => {
				const splitted = item.split('.');
				const semester = splitted[1];
				const year = splitted[0];
	
				return {
					text: `${semester}º semestre de ${year}`,
					enrollment_semester: item
				}
			})
	
			return [
				{ text: 'Todos os semestres', enrollment_semester: 0 },
				...semesters
			]
		}

	}

	return (
		<StyledSemesterFilter>
			{getSemesters().map(item => (
				<StyledSemesterFilterItem
					key={uuidv4()}
					selected={selectedSemester === item.enrollment_semester}
					onClick={() => setSelectecSemester(item.enrollment_semester)}
				>
					{item.text}
				</StyledSemesterFilterItem>
			))}
		</StyledSemesterFilter>
	)
}

export default connect(
	store => ({
		scholarships: store.scholarships
	})
)(SemesterFilter);