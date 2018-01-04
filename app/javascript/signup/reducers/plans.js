import { combineReducers } from 'redux'
import { LIST_PLANS, SELECT_PLAN } from '../constants/ActionTypes'

const plans = (state, action) => {
  switch (action.type) {
    case SELECT_PLAN:
      return {
        ...state,
        selected: state.selected = true
      }
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case LIST_PLANS:
      return {
        ...state,
        ...action.plans.reduce((obj, plan) => {
          obj[plan.id] = plan
          return obj
        }, {})
      }
    default:
      const { planId } = action
      if (planId) {
        return {
          ...state,
          [planId]: plans(state[planId], action)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case LIST_PLANS:
      return action.plans.map(plan => plan.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export const getPlan = (state, id) =>
  state.byId[id]

export const getVisiblePlans= state =>
  state.visibleIds.map(id => getPlan(state, id))
