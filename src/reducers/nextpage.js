import {
	SETPAGES
} from '../actions/constances'

const nextPage = (state = {back:'', next:''}, action) => {
	switch (action.type) {
		case SETPAGES:
			return {
				back: action.back,
				next: action.next
			}
		default:
			return state
	}
}

export default nextPage