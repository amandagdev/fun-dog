import React from 'react';
import './styles.css';
import DogList from '../../components/dogList';
import Loading from '../../components/loading';

export default function Dogs() {
  const dogs = JSON.parse(localStorage.getItem('dogs'));
  console.log(dogs);
  return (
    <>
      <div className="dogs">
        {dogs ? (
          dogs.map((item, index) => {
            return <DogList key={index} dog={item.photo} infos={item} />;
          })
        ) : (
          <Loading initial="SEM DOGS" />
        )}
      </div>
    </>
  );
}
