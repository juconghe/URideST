import { combineReducers } from 'redux'
import nextPage from './nextpage'
import pickupDate from './pickupdate'
import pickupLocation from './pickuplocation'
import specialAccess from './specialAccess'
import isDisable from './buttonActive'

export default combineReducers({
	nextPage,
	pickupDate,
	pickupLocation,
	specialAccess,
	isDisable
})