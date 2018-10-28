import { combineReducers } from 'redux'
import nextPage from './nextpage'
import pickupDate from './pickupdate'
import pickupLocation from './pickuplocation'

export default combineReducers({
	nextPage,
	pickupDate,
	pickupLocation
})