import React from 'react';
// import './styles.scss';
import "../scss/top-content.scss"
import Shuttersstock from "../img-folder/trive-img/shutterstock_2087067088.png"
import Shuttersstocktwo from "../img-folder/trive-img/sshutterstock_2087067088.png"

const ImageWithTextAndOverlay = () => {
  return (
    <div className="top-image-text-container container">
      <div className="top-image-wrapper">
        <img className='top-image-left' src={Shuttersstock} alt="Shuttersstock" />
      </div>
      <div className="top-text-wrapper">
        <h2 className='top-text-header'>Unleash the power of trading Gold CFDs Today</h2>
        <p className='top-text'>Spreads starting from 0.1</p>
      </div>
      <div className="top-image-wrapper">
        <img className='top-image-right' src={Shuttersstocktwo} alt="Shuttersstocktwo" />
      </div>
    </div>
  );
};

export default ImageWithTextAndOverlay;









