export type CounterAction =
  | {
      type: 'increaseBy';
      payload: { value: number };
    }
  | {
      type: 'decrementBy';
      payload: { value: number };
    }
  | {
      type: 'reset';
    };

export const doReset = (): CounterAction => ({
  type: 'reset',
});

export const doIncreaseBy = (value: number): CounterAction => ({
  type: 'increaseBy',
  payload: { value },
});

export const doDecrementBy = (value: number): CounterAction => ({
  type: 'decrementBy',
  payload: { value },
});
