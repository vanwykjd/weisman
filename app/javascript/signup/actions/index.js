import plans from '../products/services'
import * as types from '../constants/ActionTypes'

const listPlans = plans => ({
  type: types.LIST_PLANS,
  plans
})

export const getAllPlans = () => dispatch => {
  plans.getPlans(plans => {
    dispatch(listPlans(plans))
  })
}

const selectPlanUnsafe = planId => ({
  type: types.SELECT_PLAN,
  planId
})

export const selectPlan = planId => (dispatch, getState) => {
  if (getState().plans.byId[planId] !== null) {
    dispatch(selectPlanUnsafe(planId))
  }
}
