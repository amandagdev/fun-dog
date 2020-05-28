import React from 'react';
import './styles.css';
import DogList from '../../components/dogList';

export default function Dogs() {
  const dogs = JSON.parse(localStorage.getItem('dogs'));

  console.log(dogs);
  return (
    <>
      <div className="dogs">
        <DogList dog={dogs.photo} infos={dogs} />
      </div>
    </>
  );
}
