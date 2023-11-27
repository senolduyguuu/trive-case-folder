
import "../scss/why-fair-market.scss"
import Call from "../img-folder/trive-img/CALL.png"
import Para from "../img-folder/trive-img/PARA-2-2.png"
import Paratwo from "../img-folder/trive-img/PARA-2.png"

const Whyfairmarkets = () => {
  return (
		<div className="box-container-inclusive">
<div className="container">
      <div className="row box-container">
				<h2 className="box-container-header">Why FairMarkets</h2>
        <div className="col-md-4">
          <div className="card">
					<img className="card-content-icon" src={Paratwo} alt={Paratwo}></img>
            <div className="card-body">
              <h5 className="card-title">Lowest {<br />}costs</h5>
              <p className="card-text">Our transparent and{<br />} commissions{<br />} minimize costs to{<br />} maximize returns</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
					<img className="card-content-icon" src={Para} alt={Para}></img>
            <div className="card-body">
              <h5 className="card-title">Instant{<br />}Execution</h5>
              <p className="card-text">High Number of{<br />} Executions in 0.02{<br />} seconds</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
					<img className="card-content-icon" src={Call} alt={Call}></img>
            <div className="card-body">
              <h5 className="card-title">Local{<br />}Support</h5>
              <p className="card-text">24/5 expert customer{<br />} support, available in 6 {<br />}languages</p>
            </div>
          </div>
        </div>
      </div>
    </div>
		</div>

  );
};

export default Whyfairmarkets;
