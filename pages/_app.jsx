import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

/** NEXT.JS */
import App, { Container } from 'next/app';
/** END NEXT.JS */

/** STORE */
import configureStore from '@store/configureStore';
/** END STORE */

class CustomApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps }
	}

	render() {
		const { Component, pageProps, store } = this.props;

		return (
			<Container>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</Container>
		)
	}
}

export default withRedux(configureStore)(CustomApp)