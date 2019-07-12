/** ACTION TYPES */
import actionTypes from '@actions/actionTypes';
const { GET_SCHOLARSHIPS_PENDING, GET_SCHOLARSHIPS_FULFILLED, GET_SCHOLARSHIPS_REJECTED } = actionTypes;
/** END ACTION TYPES */

/** DEFAULT STATE */
const initialState = {
	isPending: false,
	isFulfilled: false,
	isRejected: false,
	data: []
};
/** END DEFAULT STATE */

const scholarshipsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_SCHOLARSHIPS_PENDING:
			return {
				...state,
				isPending: true
			};

		case GET_SCHOLARSHIPS_FULFILLED:
			return {
				...state,
				isPending: false,
				isFulfilled: true,
				data: payload
			};

		case GET_SCHOLARSHIPS_REJECTED:
			return {
				...state,
				isPending: false,
				isRejected: true,
				data: payload
			};

		default:
			return state;
	}
};

export default scholarshipsReducer;
