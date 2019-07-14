import { combineReducers } from 'redux';

/** REDUCERS */
import favoriteScholarshipsReducer from '@reducers/favoriteScholarshipsReducer';
import scholarshipsReducer from '@reducers/scholarshipsReducer';
/** END REDUCERS */

export default combineReducers({
	favoriteScholarships: favoriteScholarshipsReducer,
	scholarships: scholarshipsReducer
})