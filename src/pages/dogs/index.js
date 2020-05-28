import React from 'react';
import './styles.css';
import DogList from '../../components/dogList';

export default function Dogs() {
  const dogs = JSON.parse(localStorage.getItem('dogs'));

  console.log(dogs);
  return (
    <>
      <div className="dogs">
        <div className="dogs__infos">
          <DogList dog={dogs.photo} />
          <div
            className="dogs__name"
            style={{ fontFamily: `'${dogs.font}'`, color: dogs.color }}
          >
            {dogs.name}
          </div>
        </div>
      </div>
    </>
  );
}
