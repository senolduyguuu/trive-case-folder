
import Topheaderimg from "../img-folder/trive-img/top-header-img.png";
import 'bootstrap/scss/bootstrap.scss';
import "../scss/top-header.scss"

const App = () => {
  return (
    <div className="container d-flex justify-content-center top-header-content">
      <div className="img-container">
        <img className="top-header-img" alt="topheaderimg" src={Topheaderimg}></img>
      </div>
    </div>
  );
};

export default App;
