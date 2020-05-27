import React from 'react';
import './styles.css';

export default function dogList({ dog, onClick }) {
  return (
    <>
      <div className="doglist">
        <img src={dog} alt={dog} onClick={onClick} />
      </div>
    </>
  );
}
