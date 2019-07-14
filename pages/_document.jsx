import Document, { Html, Head, Main, NextScript } from 'next/document';

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
					{EXTERNAL_STYLESHEETS.map((stylesheet, index) => (
						<link key={`stylesheet-${index}`} rel="stylesheet" href={stylesheet} />
					))}

					{EXTERNAL_FONTS.map((font, index) => (
						<link key={`font-${index}`} rel="stylesheet" href={font} />
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