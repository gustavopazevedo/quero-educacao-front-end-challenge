import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

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

	@media screen and (min-width: 1140px) {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
`;

const StyledFiltersKindOfCourse = styled.div`
	width: 100%;
	margin-bottom: 31px;

	@media screen and (min-width: 1140px) {
		width: calc(50% - 6px);
	}
`;

const CssStyledFiltersSelect = css`
	margin-bottom: 27px;

	@media screen and (min-width: 1140px) {
		width: calc(50% - 6px);
	}
`;

const CssStyledFiltersRange = css`
	@media screen and (min-width: 1140px) {
		width: calc(50% - 6px);
	}
`;
/** END STYLED */

function Filters({ onChange, scholarships }) {
	const [selectedCity, setSelectedCity] = useState('');
	const [selectedCourse, setSelectedCourse] = useState('');
	const [cities, setCities] = useState(0);
	const [courses, setCourses] = useState(0);
	const [kindOfCourse, setKindOfCourse] = useState();
	const [checkedKindOfCourse, setCheckedKindOfCourse] = useState([]);
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
			const kindOfCourseArr = [...new Set(scholarships.data.map(item => item.course.kind))];
			kindOfCourseArr.sort();

			setKindOfCourse(kindOfCourseArr.map(item => ({ text: item, value: item })))
			setCheckedKindOfCourse(kindOfCourseArr)
		}
	}, [scholarships])

	useEffect(() => {
		onChange({
			city: selectedCity,
			course: selectedCourse,
			kindOfCourse: checkedKindOfCourse,
			maxPrice: selectedMaxPrice
		})
	}, [selectedCity, selectedCourse, checkedKindOfCourse, selectedMaxPrice])

	return (
		<StyledFilters>
			<Select
				customCss={CssStyledFiltersSelect}
				label={'Selecione sua cidade'}
				onChange={value => setSelectedCity(value)}
				options={cities}
				value={selectedCity}
				defaultOption={{ text: '', value: '' }}
			/>
			<Select
				customCss={CssStyledFiltersSelect}
				label={'Selecione o curso de sua preferência'}
				onChange={value => setSelectedCourse(value)}
				options={courses}
				value={selectedCourse}
				defaultOption={{ text: '', value: '' }}
			/>
			<StyledFiltersKindOfCourse>
				<Label customCss={css` margin-bottom: 31px;`}>Como você quer estudar?</Label>
				{kindOfCourse && kindOfCourse.map((item, index) => (
					<Checkbox
						key={`checkbox-${index}`}
						checked={checkedKindOfCourse.includes(item.value)}
						label={item.text === 'EaD' ? 'A distância' : item.text}
						value={item.value}
						onChange={e => e.target.checked
							? setCheckedKindOfCourse([...checkedKindOfCourse, e.target.value])
							: setCheckedKindOfCourse(checkedKindOfCourse.filter(kindOfCourse => kindOfCourse !== e.target.value))
						}
					/>
				))}
			</StyledFiltersKindOfCourse>
			<Range
				customCss={CssStyledFiltersRange}
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