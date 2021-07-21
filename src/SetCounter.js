import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set } from './action';

export const SetCounter = () => {
  const initialCount = useSelector((state) => state.count);
  const [count, setCount] = useState(initialCount);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(count));
        }}
      >
        <label htmlFor="set-to">Set Count {count}</label>
        <input
          id="set-to"
          type="number"
          onChange={(e) => setCount(e.target.value)}
        />
        <input type="submit" />
      </form>
    </section>
  );
};
