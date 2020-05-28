import React from 'react';
import './styles.css';

export default function dogList({ dog, onClick, infos = '', loading }) {
  return (
    <>
      <div className="doglist">
        <img src={dog} alt={dog} onClick={onClick} />
        <div
          className="doglist__name"
          style={{ fontFamily: `'${infos.font}'`, color: infos.color }}
        >
          {infos.name}
        </div>
      </div>
    </>
  );
}
