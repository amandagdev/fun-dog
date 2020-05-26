import React, { useEffect, useState } from 'react';
import './styles.css';
import logo from '../../assets/images/logo.PNG';
import DogList from '../../components/dogList';
import api from '../../services/api';
import Loading from '../../components/loading';
import dogList from '../../components/dogList';

export default function Home() {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getDog() {
    try {
      const response = await api.get('/breeds/image/random/20');
      setDog(response.data.message);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getDog();
  }, []);

  return (
    <>
      <div className="header">
        <div className="header__image">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__name">funDog</div>
      </div>
      <div className="container">
        {!!loading ? (
          dog.map((item, index) => {
            return <DogList key={index} dog={item} />;
          })
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}
