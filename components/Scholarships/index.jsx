import styled from '@emotion/styled';

/** COMPONENTS */
import Button from '@components/Button';
import Score from '@components/Score';
/** END COMPONENTS */

/** STYLED */
const StyledScholarships = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	margin-top: 32px;

	@media screen and (min-width: 1140px) {
		align-content: center;
		margin-top: 40px;
	}
`;

const StyledScholarshipsAdd = styled.div`
	width: 100%;
	height: 199px;
	background-color: #fff;
	box-shadow: 0px 2px 5px 0px rgba(210, 210, 210, 1);
	cursor: pointer;
	position: relative;
	display: flex;
	justify-content: center;
	align-content: center;
	flex-wrap: wrap;

	@media screen and (min-width: 1140px) {
		width: calc(25% - 21px);
		height: 447px;
		margin-top: 0;
		margin: 0 28px 28px 0;
		padding: 24px;
		display: flex;
		flex-wrap: wrap;
	}

	img {
		background-color: #f00;
	}

	h4 {
		width: 100%;
		font-weight: 700;
		display: block;
		font-size: 1.9rem;
		text-align: center;
		line-height: 100%;
		margin: 7px auto 3px auto;
		user-select: none;
	}

	p {
		width: 100%;
		line-height: 150%;
		font-size: 1.3rem;
		text-align: center;
		user-select: none;
	}
`;

const StyledScholarshipsAddIcon = styled.span`
	width: 64px;
	height: 64px;
	position: relative;
	background: url('static/images/icons/icon-plus-circle.svg') no-repeat scroll center center;
	background-size: 64px auto;
	display: block;
	margin: 0 auto 19px auto;
`;

const StyledScholarshipsItem = styled.div`
	width: 100%;
	height: auto;
	padding: 20px 16px 16px 16px;
	background-color: #fff;
	box-shadow: 0px 2px 5px 0px rgba(210, 210, 210, 1);
	position: relative;
	margin-top: 24px;

	@media screen and (min-width: 1140px) {
		width: calc(25% - 21px);
		height: 447px;
		margin-top: 0;
		margin: 0 28px 28px 0;
		padding: 24px;
		display: flex;
		flex-wrap: wrap;
		align-content: space-between;

		&:nth-child(4n) {
			margin-right: 0;
		}
	}
`;

const StyledScholarshipsItemUniversityInfo = styled.div`
	width: 100%;
	padding-bottom: 17px;
	border-bottom: 2px solid #eeeeee;

	> img {
		width: 100%;
		height: 55px;
		object-fit: contain;
		object-position: center;
		display: block;

		@media screen and (min-width: 1140px) {
			height: 40px;
		}
	}

	> h4 {
		width: 100%;
		line-height: 100%;
		font-size: 1.3rem;
		text-transform: uppercase;
		text-align: center;
		margin: 28px auto 6px auto;
	}

	> h3 {
		width: 100%;
		font-size: 1.6rem;
		text-align: center;
		color: var(--color-secondary-blue);
	}

	> span {
		width: 100%;
		line-height: 100%;
		font-weight: 700;
		font-size: 1.6rem;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 16px;
	} 
`;

const StyledScholarshipsItemCourseInfo = styled.div`
	width: 100%;
	padding: 20px 0 19px 0;
	border-bottom: 2px solid #eeeeee;

	> h4 {
		width: 100%;
		line-height: 100%;
		font-size: 1.3rem;
		text-transform: uppercase;
		text-align: center;
		margin-bottom: 14px;
	}

	> p {
		width: 100%;
		line-height: 100%;
		text-align: center;
		font-size: 1.3rem;
	}
`;

const StyledScholarshipsItemPriceInfo = styled.div`
	width: 100%;
	padding: 19px 0 26px 0;

	> h4 {
		width: 100%;
		font-size: 1.3rem;
		text-align: center;
	}

	> span {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		margin-top: 14px;
		justify-content: center;
		font-size: 1.3rem;
		align-items: baseline;

		small {
			width: 100%;
			font-size: 1.3rem;
			text-align: center;
			text-decoration: line-through;
		}

		strong {
			font-size: 1.9rem;
			color: var(--color-green);
			margin: 4px 5px 0 0;
		}

	}

	> p {
		width: 100%;
		line-height: 150%;
		font-size: 1.3rem;
		margin-top: 14px;
		text-align: center;
	}
`;

const StyledScholarshipsItemButtons = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;
/** END STYLED */

function Scholarships({ items, onAdd, onExclude }) {
	return (
		<StyledScholarships>
			<StyledScholarshipsAdd onClick={() => onAdd()}>
				<StyledScholarshipsAddIcon />
				<h4>Adicionar bolsa</h4>
				<p>Clique para adicionar bolsas <br />de cursos do seu interesse</p>
			</StyledScholarshipsAdd>
			{items && items.map((item, index) => (
				<StyledScholarshipsItem key={`scholarships-item-${index}`}>
					<StyledScholarshipsItemUniversityInfo>
						<img src={item.university.logo_url} />
						<h4>{item.university.name}</h4>
						<h3>{item.course.name}</h3>
						<span>{item.university.score}<Score score={item.university.score} max={5} /></span>
					</StyledScholarshipsItemUniversityInfo>
					<StyledScholarshipsItemCourseInfo>
						<h4>{item.course.kind} • {item.course.shift}</h4>
						<p>Início das aulas em: {item.start_date}</p>
					</StyledScholarshipsItemCourseInfo>
					<StyledScholarshipsItemPriceInfo>
						<h4>{item.enabled ? 'Mensalidade com o Quero Bolsa:' : 'Bolsa indisponível.'}</h4>
						{
							item.enabled ? (
								<span>
									<small>R$ {item.full_price}</small>
									<strong>R$ {item.price_with_discount}</strong> /mês
								</span>
							) : (
								<p>Entre em contato com nosso atendimento para saber mais.</p>
							)
						}

					</StyledScholarshipsItemPriceInfo>
					<StyledScholarshipsItemButtons>
						<Button appearance={'cancel'} onClick={() => onExclude(index)}>Excluir</Button>
						<Button disabled={!item.enabled}>{item.enabled ? 'Ver oferta' : 'Indisponível'}</Button>
					</StyledScholarshipsItemButtons>
				</StyledScholarshipsItem>
			))}
		</StyledScholarships>
	)
}

export default Scholarships;