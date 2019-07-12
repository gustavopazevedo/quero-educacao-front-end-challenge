import { combineReducers } from 'redux';

/** REDUCERS */
import scholarshipsReducer from '@reducers/scholarshipsReducer';
/** END REDUCERS */

export default combineReducers({
	scholarships: scholarshipsReducer
})