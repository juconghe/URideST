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

export const setPickupLocation = (location) => ({
	type: constants.SETPICKUPLOCATION,
	location,
})