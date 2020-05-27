import React from 'react';
import './styles.css';

export default function Select({
  options = [],
  onChange,
  initial,
  id = '',
  name = '',
}) {
  return (
    <>
      <select id={id} name={name} onChange={onChange}>
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
