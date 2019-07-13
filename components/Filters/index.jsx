import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import uuidv4 from 'uuid/v4';

/** COMPONENTS */
import Checkbox from '@components/Checkbox';
import Label from '@components/Label';
import Range from '@components/Range';
import Select from '@components/Select';
/** END COMPONENTS */

/** STYLED */
const StyledFilters = styled.div`
	width: 100%;
	margin-top: 31px;
`;

const StyledFiltersKindsOfCourse = styled.div`
	width: 100%;
	margin-bottom: 31px;
`;
/** END STYLED */

function Filters({ onChange, scholarships }) {
	const [selectedCity, setSelectedCity] = useState('');
	const [selectedCourse, setSelectedCourse] = useState('');
	const [cities, setCities] = useState(0);
	const [courses, setCourses] = useState(0);
	const [kindsOfCourse, setKindsOfCourse] = useState();
	const [checkedKindsOfCourse, setCheckedKindsOfCourse] = useState([]);
	const [selectedMaxPrice, setSelectedMaxPrice] = useState(10000);

	useEffect(() => {
		if (scholarships.isFulfilled) {
			/** CITIES */
			const citiesArr = [...new Set(scholarships.data.map(item => item.campus.city))];
			citiesArr.sort();
			
			setCities(citiesArr.map(item => ({ text: item, value: item })))

			/** COURSES */
			const coursesArr = [...new Set(scholarships.data.map(item => item.course.name))];
			coursesArr.sort();

			setCourses(coursesArr.map(item => ({ text: item, value: item })));

			/** KINDS OF COURSE */
			const kindsOfCourseArr = [...new Set(scholarships.data.map(item => item.course.kind))];
			kindsOfCourseArr.sort();

			setKindsOfCourse(kindsOfCourseArr.map(item => ({ text: item, value: item })))
			setCheckedKindsOfCourse(kindsOfCourseArr)
		}
	}, [scholarships])

	useEffect(() => {
		onChange({
			city: selectedCity,
			course: selectedCourse,
			kindsOfCourse: checkedKindsOfCourse,
			maxPrice: selectedMaxPrice
		})
	}, [selectedCity, selectedCourse, checkedKindsOfCourse, selectedMaxPrice])

	function onChangeCheckedkKindsOfCourse(e, item) {
		if (e.target.checked) {
			setCheckedKindsOfCourse(c => [...c, item.value])
		} else {
			setCheckedKindsOfCourse(c => c.filter(filtered => filtered !== item.value))
		}
	}

	return (
		<StyledFilters>
			<Select
				customCss={css` margin-bottom: 27px; `}
				label={'Selecione sua cidade'}
				onChange={value => setSelectedCity(value)}
				options={cities}
				value={selectedCity}
				defaultOption={{ text: '', value: '' }}
			/>
			<Select
				customCss={css` margin-bottom: 27px; `}
				label={'Selecione o curso de sua preferência'}
				onChange={value => setSelectedCourse(value)}
				options={courses}
				value={selectedCourse}
				defaultOption={{ text: '', value: '' }}
			/>
			<StyledFiltersKindsOfCourse>
				<Label customCss={css` margin-bottom: 31px;`}>Como você quer estudar?</Label>
				{kindsOfCourse && kindsOfCourse.map(item => (
					<Checkbox
						key={uuidv4()}
						checked={checkedKindsOfCourse.includes(item.value)}
						label={item.text}
						value={item.value}
						onChange={e => onChangeCheckedkKindsOfCourse(e, item)}
					/>
				))}
			</StyledFiltersKindsOfCourse>
			<Range
				label={'Até quanto pode pagar?'}
				min={0}
				max={10000}
				value={selectedMaxPrice}
				onChange={e => setSelectedMaxPrice(e.target.value)}
			/>
		</StyledFilters>
	)
}

export default connect(
	store => ({
		scholarships: store.scholarships
	})
)(Filters);