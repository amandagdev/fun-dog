import React from 'react';
import './styles.css';
import Select from '../select';

export default function Modal({
  modalRef,
  onClick,
  modalItem,
  onChange,
  handleModalButton,
  formRef,
}) {
  const colors = ['cinza', 'azul', 'preto', 'branco', 'salmão'];
  const fonts = ['Exo 2', 'Inconsolata', 'Montserrat', 'Open Sans', 'Roboto'];
  return (
    <>
      <div ref={modalRef} className="modal">
        <div className="modal__content">
          <button className="close" onClick={onClick}>
            x
          </button>
          <div className="modal__element">
            <img src={modalItem} alt="dogs" />
            <div ref={formRef} className="nameDog"></div>
          </div>
          <div className="modal__element">
            <form onChange={onChange}>
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" required />
              <label htmlFor="color">Cor da fonte</label>
              <Select id="color" name="color" options={colors} />
              <label htmlFor="fontFamily">Fonte</label>
              <Select id="fontFamily" name="fontFamily" options={fonts} />
              <button
                className="buttonTeste"
                onClick={handleModalButton}
                type="button"
              >
                Salvar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
