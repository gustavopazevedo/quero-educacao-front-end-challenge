import styled from '@emotion/styled';

/** COMPONENTS */
import Checkbox from '@components/Checkbox';
/** END COMPONENTS */

/** STYLED */
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
/** END STYLED */

function ScholarshipsResultsItem({ checked, item, onChange }) {
	return (
		<StyledScholarshipsResultsItem>
			<Checkbox checked={checked} onChange={(e) => onChange(e, item)} />
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
	)
}

export default ScholarshipsResultsItem;