import React from 'react';
import "../scss/award-broker.scss"
import fmmodulone from "../img-folder/trive-img/FM-ODUL-1-2.png"
import fmmodultwo from  "../img-folder/trive-img/FM-ODUL-1.png"

const Awardbroker = () => {
  return (
<div className="container award-winning-container">
      <div className="row">
				<h2 className='award-winning-header'>Award Winning Broker</h2>
        <div className="col-md-6 award-winning-image-container">
          <img src={fmmodulone} alt="Görsel 1" />
        </div>
        <div className="col-md-6 award-winning-image-container">
          <img src={fmmodultwo} alt="Görsel 2" />
        </div>
      </div>
    </div>
  );
};

export default Awardbroker;