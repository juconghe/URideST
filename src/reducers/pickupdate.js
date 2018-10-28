import {SETPICKUPDATE} from '../actions/constances'

const pickupDate = (state = '', action) => {
	switch (action.type) {
		case SETPICKUPDATE:
			return action.date
		default:
			return state
	}
}

export default pickupDate