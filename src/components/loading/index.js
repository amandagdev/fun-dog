import React from 'react';
import './styles.css';
import { FaSpinner } from 'react-icons/fa';

export default function loading() {
  return (
    <>
      <div className="loading">
        <FaSpinner className="loading__animation" color="#555" size={30} />
      </div>
    </>
  );
}
