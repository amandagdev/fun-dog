import React from 'react';
import './styles.css';
import Select from '../select';
import { Link } from 'react-router-dom';

export default function Modal({
  modalRef,
  onClick,
  handleModalButton,
  dados,
  handleModal,
  dogSaved,
}) {
  const fonts = ['Exo 2', 'Inconsolata', 'Montserrat', 'Open Sans', 'Roboto'];
  return (
    <>
      <div ref={modalRef} className="modal">
        <div className="modal__content">
          <button className="close" onClick={onClick}>
            x
          </button>
          {!dogSaved ? (
            <>
              <div className="modal__element">
                <div className="modal__element__itens">
                  <img src={dados.photo} alt="dogs" />
                  <div
                    className="nameDog"
                    style={{
                      fontFamily: `'${dados.font}'`,
                      color: dados.color,
                    }}
                  >
                    {dados.name}
                  </div>
                </div>
              </div>
              <div className="modal__element">
                <form onChange={handleModal}>
                  <label htmlFor="name">Nome</label>
                  <input type="text" name="name" required />
                  <label htmlFor="color">Cor da fonte</label>
                  <select id="color" name="color">
                    <option value="#000">Selecione</option>
                    <option value="rgb(177, 175, 175)">Cinza</option>
                    <option value="rgb(58, 97, 170)">Azul</option>
                    <option value="rgb(37, 153, 37)">Verde</option>
                    <option value="#fff">Branco</option>
                    <option value="#f79e8c">Salmão</option>
                  </select>

                  <label htmlFor="font">Fonte</label>
                  <Select
                    id="font"
                    name="font"
                    options={fonts}
                    initial="Selecione"
                  />
                  <button
                    className="buttonTeste"
                    onClick={handleModalButton}
                    type="button"
                  >
                    Salvar
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="modal__saved">
              <span>Dog salvo com sucesso!</span>
              <Link to="/dogs">My Dogs</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
