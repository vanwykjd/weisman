import { combineReducers } from 'redux'
import plans, * as fromPlans from './plans'

export default combineReducers({
  plans
})

export const getPlan = (state, id) => fromPlans.getPlan(state.plans, id)

