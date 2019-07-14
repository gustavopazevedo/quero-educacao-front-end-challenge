/** ACTION TYPES */
import actionTypes from '@actions/actionTypes';
const { SET_FAVORITE_SCHOLARSHIPS_FULFILLED } = actionTypes;
/** END ACTION TYPES */

const setFavoriteScholarships = (favorites) => {
	return dispatch => {
		dispatch({
			type: SET_FAVORITE_SCHOLARSHIPS_FULFILLED,
			payload: favorites
		})
	}
}

export default setFavoriteScholarships;