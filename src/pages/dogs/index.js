import React from 'react';
import './styles.css';
import DogList from '../../components/dogList';

export default function Dogs() {
  const dogs = JSON.parse(localStorage.getItem('dogs'));
  return (
    <>
      <div className="container__dogs">
        <div className="dogs">
          {dogs ? (
            dogs.map((item, index) => {
              return <DogList key={index} dog={item.photo} infos={item} />;
            })
          ) : (
            <div className="dogs__not">
              <span>sem dog</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
