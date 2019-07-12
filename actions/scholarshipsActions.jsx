import axios from 'axios';

/** ACTION TYPES */
import actionTypes from '@actions/actionTypes';
const { GET_SCHOLARSHIPS_PENDING, GET_SCHOLARSHIPS_FULFILLED, GET_SCHOLARSHIPS_REJECTED } = actionTypes;
/** END ACTION TYPES */

const getScholarships = () => {
	return async dispatch => {
		dispatch({
			type: GET_SCHOLARSHIPS_PENDING
		})

		try {
			const { data } = await axios.get(`${process.env.API_URL}/scholarships/`);

			dispatch({
				type: GET_SCHOLARSHIPS_FULFILLED,
				payload: data
			})
		} catch (err) {
			dispatch({
				type: GET_SCHOLARSHIPS_REJECTED,
				payload: err
			})
		}
	}
}

export default getScholarships;