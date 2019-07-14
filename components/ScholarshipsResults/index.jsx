import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import uuidv4 from 'uuid/v4';

/** COMPONENTS */
import ScholarshipsResultsItem from '@components/ScholarshipsResultsItem';
/** END COMPONENTS */

/** STYLED */
const StyledScholarshipsResults = styled.div`
	width: 100%;
	height: auto;
	margin-top: 32px;
`;

const StyledScholarshipsResultsHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	border-bottom: 2px solid #eeeeee;

	span {
		font-size: 1.6rem;
		font-weight: bold;
	}
`;
/** END STYLED  */

function ScholarshipsResults({ filters, scholarships }) {
	const [results, setResults] = useState([])
	const [checkedItems, setCheckedItems] = useState([]);

	useEffect(() => {
		console.log(checkedItems);
	}, [checkedItems])

	useEffect(() => {
		if (scholarships.isFulfilled) {
			let _results = scholarships.data;
			if (filters.city !== '') {
				_results = _results.filter(item => item.campus.city === filters.city)
			}

			if (filters.course !== '') {
				_results = _results.filter(item => item.course.name === filters.course)
			}

			_results = _results.filter(item => filters.kindOfCourse.includes(item.course.kind));
			_results = _results.filter(item => item.price_with_discount <= filters.maxPrice);

			setResults(_results)
		}
	}, [filters, scholarships])

	return (
		<StyledScholarshipsResults>
			<StyledScholarshipsResultsHeader>
				<span>Resultado:</span>
			</StyledScholarshipsResultsHeader>
			{results && results.map(item => (
				<ScholarshipsResultsItem
					key={uuidv4()}
					item={item}
					onChange={(e, item) => setCheckedItems([])}
				/>
			))}
		</StyledScholarshipsResults>
	)
}

export default connect(
	store => ({
		scholarships: store.scholarships
	})
)(ScholarshipsResults);