import {SETPICKUPLOCATION} from '../actions/constances'

const pickupLocation = (state = '', action) => {
	switch (action.type) {
		case SETPICKUPLOCATION:
			return action.location
		default:
			return state
	}
}

export default pickupLocation