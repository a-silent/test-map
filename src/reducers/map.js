import * as types from "../constants/actionTypes";

import initialState from "../store/initialState";

export default (state = initialState.map, { type, payload }) => {
	switch (type) {
		default:
			return state;
	}
};
