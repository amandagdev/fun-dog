import React from 'react';
import './styles.css';
import { FaSpinner } from 'react-icons/fa';

export default function loading() {
  return (
    <>
      <div className="loading">
        <div>
          <FaSpinner className="loading" color="#555" size={30} />
        </div>
      </div>
    </>
  );
}
