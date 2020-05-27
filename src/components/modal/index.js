import React from 'react';
import './styles.css';

export default function Modal({ modalRef, onClick }) {
  return (
    <>
      <div ref={modalRef} className="modal">
        <div className="modal__content">
          <button className="close" onClick={onClick}>
            X
          </button>
          <p>Modal</p>
        </div>
      </div>
    </>
  );
}
