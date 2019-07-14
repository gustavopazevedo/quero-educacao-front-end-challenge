import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import uuidv4 from 'uuid/v4';

/** COMPONENTS */
import Checkbox from '@components/Checkbox';
/** END COMPONENTS */

/** STYLED */
const StyledResults = styled.div`
	width: 100%;
	height: auto;
	margin-top: 32px;
`;

const StyledResultsHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	border-bottom: 2px solid #eeeeee;

	span {
		font-size: 1.6rem;
		font-weight: bold;
	}
`;

const StyledResultsItem = styled.div`
	width: 100%;
	border-bottom: 2px solid #eeeeee;
	padding: 16px 0 16px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledResultsItemImage = styled.img`
	width: calc(50% - 16px);
	height: 60px;
	padding: 0 28px;
	object-fit: contain;
`;

const StyledResultsItemInfo = styled.div`
	width: 50%;
`;

const StyledResultsItemCourse = styled.h3`
	width: 100%;
	font-size: 1.6rem;
	line-height: 150%;
	margin-bottom: 3px;
	color: var(--color-secondary-blue);
`;

const StyledResultsItemLevel = styled.span`
	width: 100%;
	font-size: 1.3rem;
	display: block;
`;

const StyledResultsItemPrice = styled.span`
	width: 100%;
	font-size: 1.6rem;
	line-height: 150%;
	display: block;
	margin-top: 19px;

	strong {
		color: var(--color-green);
	}
`;
/** END STYLED  */

function ScholarshipsResults({ filters, scholarships }) {
	const [results, setResults] = useState([])
	const [selectedScholarShips, setSelectedScholarships] = useState([]);

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
		<StyledResults>
			<StyledResultsHeader>
				<span>Resultado:</span>
			</StyledResultsHeader>
			{results && results.map(item => (
				<StyledResultsItem key={uuidv4()}>
					<Checkbox />
					<StyledResultsItemImage src={item.university.logo_url} />
					<StyledResultsItemInfo>
						<StyledResultsItemCourse>{item.course.name}</StyledResultsItemCourse>
						<StyledResultsItemLevel>{item.course.level}</StyledResultsItemLevel>
						<StyledResultsItemPrice>
							Bolsa de <strong>{Math.round(item.discount_percentage)}%<br />
							R$ {Math.round(item.price_with_discount)}/mês</strong>
						</StyledResultsItemPrice>
					</StyledResultsItemInfo>
				</StyledResultsItem>
			))}
		</StyledResults>
	)
}

export default connect(
	store => ({
		scholarships: store.scholarships
	})
)(ScholarshipsResults);