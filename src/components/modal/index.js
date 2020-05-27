import React from 'react';
import './styles.css';
import Select from '../select';

export default function Modal({ modalRef, onClick, modalItem }) {
  return (
    <>
      <div ref={modalRef} className="modal">
        <div className="modal__content">
          <button className="close" onClick={onClick}>
            x
          </button>
          <div className="modal__element">
            <img src={modalItem} alt="dogs" />
          </div>
          <div className="modal__element">
            <form>
              <label for="name">Nome</label>
              <input type="text" name="name" required />
              <label>Cor da fonte</label>
              <Select />
              <label>Fonte</label>
              <Select />
              <button type="button">Salvar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
