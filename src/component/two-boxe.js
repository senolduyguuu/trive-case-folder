import React from 'react';
import "../scss/two-boxe.scss"
import Phoneimg from "../img-folder/trive-img/Image 10.png"
import Phoneimgtwo from "../img-folder/trive-img/Screen Shot 2023-03-23 at 15.32.15.png"
const TwoBoxes = () => {
  return (
			<div className=' two-boxe'>
			<div className="container two-boxe-container">
				<h2  className="two-boxe-header">Trading Platforms & Tools</h2>
				<div className="row">
					<div className="col-md-6">
						<div className="box">
							<h2 className="box-text">MetaTrader4</h2>
							<p className='box-content'>MetaTrader 4 is a sohhisticated trading {<br/>} application that provides you with a variety{<br/>}
              of tools and features to assist you in{<br/>} conducting analysis and customizing your {<br/>}trading experience
							</p>
								<p className='box-content-left-text'>MT4</p>
								<img className='box-img two-box-img' src={Phoneimg} alt={Phoneimg}></img>
						</div>
					</div>
					<div className="col-md-6">
						<div className="box">
							<h2 className="box-text">MetaTrader5</h2>
							<p className='box-content'>MT5'S smooth user interface can{<br/>} be fully shaped to your taste so {<br/>} you can trade & analyze the {<br/>} way you want.</p>
								<p className=' box-content-right-text'>MT5</p>
								<img className='box-img-two two-box-img' src={Phoneimgtwo} alt={Phoneimgtwo}></img>
						</div>
					</div>
				</div>
			</div>
			</div>

  );
};

export default TwoBoxes;
