import { useReducer } from 'react';
import { doDecrementBy, doIncreaseBy, doReset } from './actions/actions';
import { CounterState } from './interfaces';
import { counterReducer } from './reducers/counterReducer';

export const INITIAL_STATE: CounterState = {
  changes: 0,
  counter: 0,
  previous: 0,
};
export const CounterReducerComponent = () => {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleIncreaseBy = (value: number) => dispatch(doIncreaseBy(value));
  const handleReset = () => dispatch(doReset());

  const handleDecrementBy = (value: number) => dispatch(doDecrementBy(value));

  return (
    <>
      <h1>Counter Reducer: {state.counter}</h1>
      <pre>{JSON.stringify({ ...state }, null, 2)}</pre>
      <button onClick={() => handleIncreaseBy(1)}>+1</button>
      <button onClick={() => handleIncreaseBy(5)}>+5</button>
      <button onClick={() => handleIncreaseBy(10)}>+10</button>
      <button onClick={handleReset}>Restart</button>
      <button onClick={() => handleDecrementBy(1)}>-1</button>
      <button onClick={() => handleDecrementBy(5)}>-5</button>
      <button onClick={() => handleDecrementBy(10)}>-10</button>
    </>
  );
};
