import * as types from '../constants/ActionTypes'

export const addToAccount = plan => {
  return {
    type: 'ADD_TO_ACCOUNT',
    plan
  }
}
