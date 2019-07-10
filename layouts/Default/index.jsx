import { Fragment } from 'react';
import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';

/** COMPONENTS */
import Header from '@components/Header';
import Footer from '@components/Footer';
/** END COMPONENTS */

/** GLOBAL STYLES */
const GlobalStyles = css`
	:root {
		--default-font-family: proxima-nova, sans-serif;
		--color-main-blue: #18ACC4;
		--color-secondary-blue:  #007A8D;
		--color-main-yellow: #FDCB13;
		--color-secondary-yellow:  #DE9E1F;
		--color-green: #0FA866;
		--color-grey: #0FA866;
		--color-black: #1F2D30;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;

		&:before,
		&:after {
			box-sizing: border-box;
		}
	}

	html {
		font-size: 10px;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	body {
		text-rendering: optimizelegibility;
		font-family: var(--default-font-family);
		color: var(--color-black);
	}
`;
/** END GLOBAL STYLES */

/** STYLED */
const StyledSite = styled.div`
	width: 100%;
	min-height: 100vh;
`;

const StyledMain = styled.main`
	width: 100%;
	min-height: 600px;
`;
/** END STYLED */

function DefaultLayout({ children }) {
	return (
		<Fragment>
			<Global styles={GlobalStyles} />
			<StyledSite>
				<Header />
				<StyledMain>{children}</StyledMain>
				<Footer />
			</StyledSite>
		</Fragment>
	)
}

export default DefaultLayout;