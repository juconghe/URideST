import * as constants from './constances'

export const setPages = (back, next) => ({
	type: constants.SETPAGES,
	back,
	next
})

export const setPickupDate = (date) => ({
	type: constants.SETPICKUPDATE,
	date,
})