import _plans from './plans.json'

const TIMEOUT = 100

export default {
  getPlans: (cb, timeout) => setTimeout(() => cb(_plans), timeout || TIMEOUT),
  purchasePlan: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
