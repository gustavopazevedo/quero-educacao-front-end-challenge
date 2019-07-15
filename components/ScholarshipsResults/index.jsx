import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

/** ACTIONS */
import actions from '@actions';
/** END ACTIONS */

/** COMPONENTS */
import Checkbox from '@components/Checkbox';
import Button from '@components/Button';
import OrderBy from '@components/OrderBy';
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
	padding-bottom: 24px;

	span {
		font-size: 1.6rem;
		font-weight: bold;
	}
`;

const StyledScholarshipsResultsItem = styled.div`
	width: 100%;
	border-bottom: 2px solid #eeeeee;
	padding: 16px 0 16px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledScholarshipsResultsItemImage = styled.img`
	width: calc(50% - 16px);
	height: 60px;
	padding: 0 28px;
	object-fit: contain;
`;

const StyledScholarshipsResultsItemInfo = styled.div`
	width: 50%;
`;

const StyledScholarshipsResultsItemCourse = styled.h3`
	width: 100%;
	font-size: 1.6rem;
	line-height: 150%;
	margin-bottom: 3px;
	color: var(--color-secondary-blue);
`;

const StyledScholarshipsResultsItemLevel = styled.span`
	width: 100%;
	font-size: 1.3rem;
	display: block;
`;

const StyledScholarshipsResultsItemPrice = styled.span`
	width: 100%;
	font-size: 1.6rem;
	line-height: 150%;
	display: block;
	margin-top: 19px;

	strong {
		color: var(--color-green);
	}
`;

const StyledScholarshipsResultsButtons = styled.div`
	width: 100%;
	padding-top: 24px;
	display: flex;
	justify-content: space-between;
`;
/** END STYLED  */

function ScholarshipsResults({ filters, scholarships, setFavoriteScholarships, onCloseModal }) {
	const [results, setResults] = useState([])
	const [checkedItems, setCheckedItems] = useState([]);
	const [orderBy, setOrderBy] = useState('university_name');

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

			setResults(orderResultsBy(_results));
		}
	}, [filters, scholarships])

	useEffect(() => {
		setCheckedItems([])
	}, [results])

	function addFavoriteScholarships() {
		const favoriteScholarships = checkedItems.map(item => {
			const splittedItem = item.split('|');

			return results.filter(result => {
				const { course, university, campus } = result;

				return (
					course.name === splittedItem[0]
					&& course.kind === splittedItem[1]
					&& course.level === splittedItem[2]
					&& course.shift === splittedItem[3]
					&& university.name === splittedItem[4]
					&& campus.name === splittedItem[5]
					&& campus.city === splittedItem[6]
				)
			})[0]
		});

		setFavoriteScholarships(favoriteScholarships);
		onCloseModal();
	}

	function getCheckboxValue(item) {
		return `${item.course.name}|${item.course.kind}|${item.course.level}|${item.course.shift}|${item.university.name}|${item.campus.name}|${item.campus.city}`;
	}

	function orderResultsBy(items) {
		if (orderBy === 'university_name') {
			return items.sort((a, b) => (a.university.name > b.university.name) ? 1 : -1);
		}
	}

	if (results && results.length) {
		return (
			<StyledScholarshipsResults>
				<StyledScholarshipsResultsHeader>
					<span>Resultado:</span>
					<OrderBy
						label={'Ordenar por'}
						options={[
							{ text: 'Nome da faculdade', value: 'university_name' },
							{ text: 'Nome do curso', value: 'course_name' }
						]}
						value={orderBy}
						onChange={o => setOrderBy(o)}
					/>
				</StyledScholarshipsResultsHeader>
	
				{results.map((item, index) => (
					<StyledScholarshipsResultsItem key={`scholarships-results-item${index}`}>
						<Checkbox
							checked={checkedItems.includes(getCheckboxValue(item))}
							value={getCheckboxValue(item)}
							onChange={e => e.target.checked
								? setCheckedItems([...checkedItems, e.target.value])
								: setCheckedItems(checkedItems.filter(checkeditem => checkeditem !== e.target.value))
							}
						/>
						<StyledScholarshipsResultsItemImage src={item.university.logo_url} />
						<StyledScholarshipsResultsItemInfo>
							<StyledScholarshipsResultsItemCourse>{item.course.name}</StyledScholarshipsResultsItemCourse>
							<StyledScholarshipsResultsItemLevel>{item.course.level}</StyledScholarshipsResultsItemLevel>
							<StyledScholarshipsResultsItemPrice>
								Bolsa de <strong>{Math.round(item.discount_percentage)}%<br />
								R$ {Math.round(item.price_with_discount)}/mês</strong>
							</StyledScholarshipsResultsItemPrice>
						</StyledScholarshipsResultsItemInfo>
					</StyledScholarshipsResultsItem>
				))}
	
				<StyledScholarshipsResultsButtons>
					<Button appearance={'cancel'} onClick={() => onCloseModal()}>Cancelar</Button>
					<Button disabled={checkedItems.length > 0 ? false : true} onClick={(e) => addFavoriteScholarships()}>Adicionar bolsa(s)</Button>
				</StyledScholarshipsResultsButtons>
			</StyledScholarshipsResults>
		)
	}

	return null;
}

export default connect(
	store => ({
		scholarships: store.scholarships
	}),
	actions
)(ScholarshipsResults);