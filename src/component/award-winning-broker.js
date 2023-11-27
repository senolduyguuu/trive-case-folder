import React from 'react';
import "../scss/award-broker.scss"
import fmmodulone from "../img-folder/trive-img/FM-ODUL-1-2.png"
import fmmodultwo from  "../img-folder/trive-img/FM-ODUL-1.png"

const Awardbroker = () => {
  return (
<div className='award-broker'>
<div className="background-text"></div>
<div className='award-broker-content'>
<h2 className='award-broke-text'>Award Winning Broker</h2>
<div className='award-broker-img'>
<img alt='fmmodulon' src={fmmodulone}></img>
<img alt='fmmodultwo' src={fmmodultwo}></img>
</div>
</div>
</div> 
  );
};

export default Awardbroker;