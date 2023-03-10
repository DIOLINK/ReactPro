import { INITIAL_STATE } from '..';
import { CounterAction } from '../actions/actions';
import { CounterState } from '../interfaces';

export const counterReducer = (
  state: CounterState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case 'decrementBy':
      return {
        changes: state.changes + 1,
        counter: state.counter - action.payload.value,
        previous: state.counter,
      };
    case 'increaseBy':
      return {
        changes: state.changes + 1,
        counter: state.counter + action.payload.value,
        previous: state.counter,
      };
    case 'reset':
      return INITIAL_STATE;
    default:
      return state;
  }
};
