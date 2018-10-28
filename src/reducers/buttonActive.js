import {SETBUTTONACTIVE} from '../actions/constances'

const setButtonActive = (state = false, action) => {
	switch (action.type) {
		case SETBUTTONACTIVE:
			return action.isDisable
		default:
			return state
	}
}

export default setButtonActive