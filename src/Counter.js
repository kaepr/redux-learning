import { useDispatch, useSelector } from 'react-redux';
import { set, increment, decrement } from './action';
import { SetCounter } from './SetCounter';

export const Counter = () => {
  const incident = 'Incident';
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  function handleSet() {
    dispatch(set(0));
  }

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleSet}>Reset</button>
        <button onClick={handleDecrement}>Decrement</button>
      </section>
      <SetCounter />
    </main>
  );
};

export default Counter;
