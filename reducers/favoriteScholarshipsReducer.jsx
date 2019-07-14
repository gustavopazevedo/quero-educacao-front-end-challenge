/** ACTION TYPES */
import actionTypes from '@actions/actionTypes';
const { SET_FAVORITE_SCHOLARSHIPS_FULFILLED } = actionTypes;
/** END ACTION TYPES */

/** DEFAULT STATE */
const initialState = {
	isPending: false,
	isFulfilled: false,
	isRejected: false,
	data: []
};
/** END DEFAULT STATE */

const favoriteScholarshipsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_FAVORITE_SCHOLARSHIPS_FULFILLED:
			return {
				...state,
				isPending: false,
				isFulfilled: true,
				data: payload
			};

		default:
			return state;
	}
};

export default favoriteScholarshipsReducer;
