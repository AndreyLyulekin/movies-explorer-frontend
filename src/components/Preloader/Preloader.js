import React from 'react';
import './Preloader.css';

const Preloader = ({ first }) => {
  return (
    <div className={`preloader ${first ? 'preloader__first' : ''}`}>
      <div className='preloader__container'>
        <span className='preloader__round'></span>
      </div>
    </div>
  );
};

export default Preloader;
