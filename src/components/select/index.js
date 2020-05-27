import React from 'react';
import './styles.css';

export default function Select({ options, onChange, initial = 'Selecione' }) {
  return (
    <>
      <select onChange={onChange}>
        <option value={initial}>{initial}</option>
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
