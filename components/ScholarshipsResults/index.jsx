import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function ScholarshipsResults({ filters, scholarships }) {
	const [results, setResults] = useState([])

	useEffect(() => {
		if (scholarships.isFulfilled) {
			let _results = scholarships.data;
			if (filters.city !== '') {
				_results = _results.filter(item => item.campus.city === filters.city)
			}

			if (filters.course !== '') {
				_results = _results.filter(item => item.course.name === filters.course)
			}

			if (filters.kindOfCourse && filters.kindOfCourse.length) {
				_results = _results.filter(item => filters.kindOfCourse.includes(item.course.kind));
			}

			_results = _results.filter(item => item.price_with_discount <= filters.maxPrice);

			setResults(_results)
		}
	}, [filters, scholarships])

	return (
		<p>{JSON.stringify(results)}</p>
	)
}

export default connect(
	store => ({
		scholarships: store.scholarships
	})
)(ScholarshipsResults);