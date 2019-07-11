const path = require('path');

/** CONFIG */
const app_env = process.env.APP_ENV || 'development';
const config = require(`./configs/${app_env}.config.js`);
/** END CONFIG */

module.exports = {
	target: 'serverless',
	env: config,

	/** CUSTOM WEBPACK CONFIG */
	webpack(webpackConfig) {
		const aliases = [
			{ alias: '@actions', path: 'actions' },
			{ alias: '@components', path: 'components' },
			{ alias: '@layouts', path: 'layouts' },
			{ alias: '@reducers', path: 'reducers' },
			{ alias: '@static', path: 'static' },
			{ alias: '@store', path: 'store' }

		]

		aliases.map(item => {
			webpackConfig.resolve.alias[item.alias] = path.join(__dirname, item.path)
		})

		return webpackConfig;
	}
	/** END CUSTOM WEBPACK CONFIG */
}