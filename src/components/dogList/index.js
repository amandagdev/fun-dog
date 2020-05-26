import React from 'react';
import './styles.css';

export default function dogList({ dog }) {
  return (
    <>
      <div className="doglist">
        <img src={dog} alt={dog} />
      </div>
    </>
  );
}
