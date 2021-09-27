import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import { register, login, logout } from '../../reducers/userSlice';
import { getReadings, getReading, createMeasure, createMeasurement } from '../../reducers/readingSlice';
import styles from './Counter.module.css';

const fd = {
  "first_name": "graace",
  "last_name": "Popoola",
  "email": "graazaceqm@grace.com",
  "password": "password",
  "username": "oyziwaazaq"
}

const lg = {
  "email": "graazaceqm@grace.com",
  "password": "password",
}

const lpo = {
  formData: {value: 200.5, date: new Date()},
  id: 2
}

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(register(fd))}
        >
          Register
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(login(lg))}
        >
          Login
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(getReadings())}
        >
          Get all Measure
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(getReading())}
        >
          Get One Measure
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(createMeasure({title: 'Test', unit: 'lbs', goal: 250}))}
        >
          Create Measure
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(createMeasurement(lpo))}
        >
          Create Measurement
        </button>
      </div>
    </div>
  );
}
