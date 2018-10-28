import { combineReducers } from 'redux'
import nextPage from './nextpage'
import pickupDate from './pickupdate'
import pickupLocation from './pickuplocation'
import specialAccess from './specialAccess'

export default combineReducers({
	nextPage,
	pickupDate,
	pickupLocation,
	specialAccess
})