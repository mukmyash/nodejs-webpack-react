import { createReducer } from 'redux-act';
import update from 'immutability-helper';

import { Counter } from '../../models/counter';
import {
    decrementCounter,
    incrementCounter,
    resetCounter,
    setCounter
} from '../actions/counter-actions'


export interface CounterState {
    Counter: Counter
}

export const defaultState: CounterState = {
    Counter: {
        Value: 0
    }
}

var CounterReducer = createReducer<CounterState>({}, defaultState);

CounterReducer.on(
    setCounter,
    (state, payload) => (update(state,
        {
            Counter: {
                Value: { $set: payload.value }
            }
        }))
);

CounterReducer.on(
    resetCounter,
    (state, payload) => (update(state,
        {
            Counter: {
                Value: { $set: 0 }
            }
        }))
);


CounterReducer.on(
    decrementCounter,
    (state, payload) => (update(state,
        {
            Counter: {
                Value: { $apply: (value: number) => (value - 1) }
            }
        }))
);
CounterReducer.on(
    incrementCounter,
    (state, payload) => (update(state,
        {
            Counter: {
                Value: { $apply: (value: number) => (value + 1) }
            }
        }))
);

export default CounterReducer;