import React from 'react';
import './styles.css';

export default function Select({ options }) {
  return (
    <>
      <select>
        {options.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </>
  );
}
