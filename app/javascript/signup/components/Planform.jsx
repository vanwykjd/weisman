import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectPlan } from '../actions'
import { getVisiblePlans } from '../reducers/plans'
import PlanSelect from '../components/PlanSelect'
import PlanList from '../components/PlanList'

const Planform = ({ products, addToCart }) => (
  <PlanList title="Plans">
    {plans.map(plan =>
      <PlanSelect
        key={plan.id}
        plan={plan}
        onSelectPlanClick={() => selectPlan(plan.id)} />
    )}
  </PlanList>
)

Planform.propTypes = {
  plans: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired
  })).isRequired,
  selectPlan: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  plans: getVisiblePlans(state.plans)
})

export default connect(
  mapStateToProps,
  { selectPlan }
)(Planform)