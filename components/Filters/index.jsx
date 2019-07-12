import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

/** COMPONENTS */
import Select from '@components/Select';
/** END COMPONENTS */

/** STYLED */
const StyledFilters = styled.div`
	width: 100%;
	margin-top: 31px;
`;
/** END STYLED */

function Filters({ scholarships }) {
	const [selectedCity, setSelectedCity] = useState(0);
	const [selectedCourse, setSelectedCourse] = useState(0);
	const [cities, setCities] = useState(0);
	const [courses, setCourses] = useState(0);

	useEffect(() => {
		if (scholarships.isFulfilled) {
			/** CITIES */
			const citiesArr = [...new Set(scholarships.data.map(item => item.campus.city))];
			citiesArr.sort();
			
			setCities(citiesArr.map(item => ({ text: item, value: item })))

			/** COURSES */
			const coursesArr = [...new Set(scholarships.data.map(item => item.course.name))];
			coursesArr.sort();

			setCourses(coursesArr.map(item => ({ text: item, value: item })))
		}
	}, [scholarships])

	return (
		<StyledFilters>
			<Select
				customCss={css` margin-bottom: 27px; `}
				label={'Selecione sua cidade'}
				onChange={value => setSelectedCity(value)}
				options={cities}
				value={selectedCity}
			/>
			<Select
				customCss={css` margin-bottom: 27px; `}
				label={'Selecione o curso de sua preferência'}
				onChange={value => setSelectedCourse(value)}
				options={courses}
				value={selectedCourse}
			/>
		</StyledFilters>
	)
}

export default connect(
	store => ({
		scholarships: store.scholarships
	})
)(Filters);