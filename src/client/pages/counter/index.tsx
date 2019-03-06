import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { State } from '../../redux/reducers'
import { push } from 'connected-react-router'

import { Counter, CounterProps, CounterEvents } from './counter'
import { autoIncrementCounter, } from '../../redux/actions/counter-actions'

const mapStateToProps = (state: State): CounterProps => ({
    Value: state.counter.Counter.Value,
})

const mapDispatchToProps = (dispatch: Dispatch): CounterEvents => ({
    startAutoIncrement: () => {
            dispatch(autoIncrementCounter());
    }
})

export default connect<CounterProps, CounterEvents>(mapStateToProps, mapDispatchToProps)(Counter)