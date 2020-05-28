import React from 'react';
import './styles.css';

export default function loading({ initial = 'Carregando' }) {
  return (
    <>
      <div className="loading">{initial}</div>
    </>
  );
}
