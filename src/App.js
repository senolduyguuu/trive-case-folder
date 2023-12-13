import React, { useState } from 'react';
import 'bootstrap/scss/bootstrap.scss';
import Topheader from "./component/top-header"
import { FairmarktGold } from './component/fairmarkets-gold';
import Topcontent from "./component/top-content"
import FormComponent from './component/form-validation';
import ListComponent from './component/form-validation-right';
import Whyfairmarkets from './component/why-fairmarkets';
import TwoBoxes from './component/two-boxe';
import Footertopcomponent from "./component/footer-top-component"
import Openaccountbutton from "./component/open-account-button"
import Winningbroker from "./component/award-winning-broker"
import "./App.css"
import Awardbroker from './component/award-winning-broker';
import Footer from "./component/footer"

const App = () => {
  const [listData, setListData] = useState([]);

  const handleFormSubmit = (formData) => {
    setListData([...listData, formData]);
  };

  const handleDelete = (itemToDelete) => {
    const updatedList = listData.filter(item => item !== itemToDelete);
    setListData(updatedList);
  };

  return (
		 <>
		     <div className="app-container">
			<Topheader></Topheader>
			<FairmarktGold></FairmarktGold>
			<Topcontent></Topcontent>
	

    </div>
	<div className='app-content'>
	<div className='container-wrapper'>
  <div className='form-container'>
    <FormComponent onFormSubmit={handleFormSubmit} />
  </div>
  <div className='list-container'>
    <ListComponent dataList={listData} onDelete={handleDelete} />
  </div>
</div>
 <Whyfairmarkets></Whyfairmarkets>
<TwoBoxes></TwoBoxes>
<Footertopcomponent></Footertopcomponent>
<Openaccountbutton></Openaccountbutton>

	</div>	
	<Awardbroker></Awardbroker>
<Openaccountbutton></Openaccountbutton>
	<Footer></Footer>
		 </> 

  );
};

export default App;
