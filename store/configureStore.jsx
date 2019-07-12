import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

/** REDUCERS */
import reducers from '@reducers';
/** END REDUCERS */

export default function(defaultState) {
	return createStore(
		reducers,
		defaultState,
		process.env.NODE_ENV === 'development' && process.browser
			? applyMiddleware(thunkMiddleware, logger)
			: applyMiddleware(thunkMiddleware)
	)
}