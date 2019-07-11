import styled from '@emotion/styled';

/** NEXT.JS */
import Link from 'next/link';
/** END NEXT.JS */

/** COMPONENTS */
import Container from '@components/Container';
/** END COMPONENTS */

/** STYLED */
const StyledHeader = styled.header`
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	background-color: #fff;
`;

const StyledBrand = styled.h1`
	width: 115px;
	display: block;
	margin: 0 auto;

	a {
		display: block;
	}

	img {
		width: 100%;
		height: auto;
		display: block;
	}
`;
/** END STYLED */

function Header() {
	return (
		<StyledHeader>
			<Container>
				<StyledBrand>
					<Link href={process.env.HOME_URL}>
						<a>
							<img src="/static/images/brand-quero-educacao.svg" />
						</a>
					</Link>
				</StyledBrand>
			</Container>
		</StyledHeader>
	)
}

export default Header;