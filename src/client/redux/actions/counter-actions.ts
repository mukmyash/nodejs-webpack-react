
import { createAction } from 'redux-act';


export const setCounter = createAction(
    'SET_COUNTER',
    (value: number) => ({ value }));

export const resetCounter = createAction(
    'RESET_COUNTER');


export const incrementCounter = createAction(
    'INCREMENT_COUNTER');

export const decrementCounter = createAction(
    'DECREMENT_COUNTER');

    
export const autoIncrementCounter = createAction(
    'AUTO_INCREMENT_COUNTER');