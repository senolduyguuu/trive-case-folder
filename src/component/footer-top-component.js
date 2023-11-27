
import Rectangleimg from "../img-folder/trive-img/Rectangle 160.png"
import Rectangleimgone from "../img-folder/trive-img/Rectangle 163.png"
import Rectangleimgtwo from "../img-folder/trive-img/Group 130.png"
import "../scss/footer-top-component.scss"
const Footertop = () => {
  return (
		<div className="footer-top-inclusive">
<div className="container">
      <div className="row footer-top-container">
        <div className="col-md-4">
          <div className="footer-top-card">
					<img className="footer-top-icon" src={Rectangleimg} alt={Rectangleimg}></img>
            <div className="footer-top-body">
              <h5 className="footer-top-title">MT4/MT5 {<br/>}Booster</h5>
              <p className="footer-top-text">Boost your platform  {<br/>}  with add-ons designed  {<br/>}  to enhance your  {<br/>}  trading experience!</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="footer-top-card">
					<img className="footer-top-icon" src={Rectangleimgone} alt={Rectangleimgone}></img>
            <div className="footer-top-body">
              <h5 className="footer-top-title">VPS - Virtual  {<br/>}  Private Server</h5>
              <p className="footer-top-text">Secure & private {<br/>}  platform to access your {<br/>}  trades remotely; no {<br/>}  downtime</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="footer-top-card">
					<img className="footer-top-icon" src={Rectangleimgtwo} alt={Rectangleimgtwo}></img>
            <div className="footer-top-body">
              <h5 className="footer-top-title">Trading  {<br/>}Central</h5>
              <p className="footer-top-text">Unmatched research {<br/>} and analysis services  {<br/>}  for FairMarkets’ traders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
		</div>

  );
};

export default Footertop;
