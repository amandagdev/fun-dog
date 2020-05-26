import React, { useEffect, useState } from 'react';
import './styles.css';
import logo from '../../assets/images/logo.PNG';
import DogList from '../../components/dogList';
import api from '../../services/api';
import Loading from '../../components/loading';
import Select from '../../components/select';

export default function Home() {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [breeds, setBreeds] = useState([]);

  async function getDog() {
    try {
      setLoading(false);
      const responseDog = await api.get('/breeds/image/random/50');
      const responseBreeds = await api.get('breeds/list/all');
      const responseAll = await Promise.all([responseDog, responseBreeds]);
      setDog(responseAll[0].data.message);
      setBreeds(responseAll[1].data.message);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDog();
  }, []);

  const breedsName = Object.keys(breeds);

  return (
    <>
      <div className="header">
        <div className="header__image">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__name">funDog</div>
      </div>
      <div className="container">
        <div className="container__select">
          {!!loading ? <Select options={breedsName} /> : <Loading />}
        </div>
        <div className="container__dogs">
          {!!loading ? (
            dog.map((item, index) => {
              return <DogList key={index} dog={item} />;
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  );
}
