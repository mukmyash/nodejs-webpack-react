
import { combineReducers, Reducer } from 'redux'
import { RouterState, connectRouter } from 'connected-react-router'
import { History } from 'history';
import CounterReducer, { CounterState } from './counter-reducer'

export interface State {
    counter: CounterState
}

export default function createRootReducer(history: History): Reducer<State> {
    return combineReducers({
        router: connectRouter(history),
        counter: CounterReducer
    })
}