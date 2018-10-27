import * as constants from './constances'

export const goNextPage = (back, next) => ({
	type: constants.GONEXTPAGE,
	back,
	next
})