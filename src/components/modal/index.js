import React from 'react';
import './styles.css';

export default function Modal({ modalRef, onClick, modalItem }) {
  return (
    <>
      <div ref={modalRef} className="modal">
        <div className="modal__content">
          <button className="close" onClick={onClick}>
            X
          </button>
          <div className="modal__element">
            <img src={modalItem} alt="dogs" />
          </div>
          <div className="modal__element">
            dsfffffffffffffffffffffffffffffff
          </div>
        </div>
      </div>
    </>
  );
}
