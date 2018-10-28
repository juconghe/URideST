import {SETSPECIALNEEDS} from '../actions/constances'

const specialAccess = (state = '', action) => {
	switch (action.type) {
		case SETSPECIALNEEDS:
			return action.message
		default:
			return state
	}
}

export default specialAccess