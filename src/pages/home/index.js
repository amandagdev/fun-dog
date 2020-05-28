import React, { useEffect, useState, useRef } from 'react';
import './styles.css';
import DogList from '../../components/dogList';
import api from '../../services/api';
import Loading from '../../components/loading';
import Select from '../../components/select';
import Modal from '../../components/modal';

export default function Home() {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [breeds, setBreeds] = useState([]);
  const [changeBreed, setChangeBreed] = useState('');
  const [breedsDogs, setBreedsDogs] = useState([]);
  const [modal, setModal] = useState(false);
  const modalRef = useRef(null);
  const [dados, setDados] = useState([]);
  const [dogSaved, setDogSaved] = useState(false);

  async function getDog() {
    try {
      setLoading(false);
      const responseDog = await api.get('/breeds/image/random/50');
      const responseBreeds = await api.get('/breeds/list/all');
      const responseAll = await Promise.all([responseDog, responseBreeds]);
      setDog(responseAll[0].data.message);
      setBreeds(responseAll[1].data.message);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  }

  const breedsName = Object.keys(breeds);

  useEffect(() => {
    async function handleBreeds() {
      try {
        setLoading(false);
        if (!changeBreed) return;
        const response = await api.get(`/breed/${changeBreed}/images`);
        setBreedsDogs(response.data.message);
        setLoading(true);
      } catch (error) {
        console.log(error);
      }
    }
    handleBreeds();
  }, [changeBreed]);

  const modalToggle = (item) => {
    setModal((toggle) => !toggle);
    setDados({ name: '', color: '', font: '', photo: item });
    setDogSaved(false);
    document.body.addEventListener('click', outOfModal);
  };

  const outOfModal = (e) => {
    if (e.target === modalRef.current) modalToggle(e);
  };

  const handleModal = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setDados({ ...dados, [name]: value });
  };

  const handleModalButton = (e) => {
    e.preventDefault();
    const getDogs = JSON.parse(localStorage.getItem('dogs'));
    if (getDogs) {
      localStorage.setItem('dogs', JSON.stringify([...getDogs, dados]));
      setDogSaved(true);
      return;
    }
    localStorage.setItem('dogs', JSON.stringify([dados]));
    setDogSaved(true);
  };

  useEffect(() => {
    getDog();
  }, []);

  return (
    <>
      <div className="container">
        <div className="container__select">
          <Select
            onChange={(e) => setChangeBreed(e.target.value)}
            options={breedsName}
            initial="Todos"
          />
        </div>
        <div className="container__dogs">
          {!changeBreed ? (
            !!loading ? (
              dog.map((item, index) => {
                return (
                  <DogList
                    onClick={() => modalToggle(item)}
                    key={index}
                    dog={item}
                  />
                );
              })
            ) : (
              <Loading />
            )
          ) : !!loading ? (
            breedsDogs.map((item, index) => (
              <DogList
                onClick={() => modalToggle(item)}
                key={index}
                dog={item}
              />
            ))
          ) : (
            <Loading />
          )}
        </div>
        {modal && (
          <Modal
            modalRef={modalRef}
            onClick={modalToggle}
            handleModalButton={handleModalButton}
            dados={dados}
            handleModal={handleModal}
            dogSaved={dogSaved}
          />
        )}
      </div>
    </>
  );
}
