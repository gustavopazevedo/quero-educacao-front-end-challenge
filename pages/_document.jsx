import Document, { Html, Head, Main, NextScript } from 'next/document';
import uuidv4 from 'uuid/v4';

class CustomDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);

		return { ...initialProps }
	}

	render() {
		const { EXTERNAL_STYLESHEETS, EXTERNAL_FONTS } = process.env;
		return (
			<Html>
				<Head>
					{EXTERNAL_STYLESHEETS.map(stylesheet => (
						<link key={uuidv4()} rel="stylesheet" href={stylesheet} />
					))}

					{EXTERNAL_FONTS.map(font => (
						<link key={uuidv4()} rel="stylesheet" href={font} />
					))}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default CustomDocument;