import { combineReducers } from 'redux'

import employee from './employee'
import account from './account'

const reducers = {
  employee,
  account
}

export default combineReducers(reducers)