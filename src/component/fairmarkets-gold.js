import "../scss/fairmarket-gold.scss"
import Goldimgone from "../img-folder/trive-img/Mask Group 19.png"
import Goldimgtwo from "../img-folder/trive-img/Mask Group 21.png"

export function FairmarktGold() {
  return (
    <div className="image-container-fairmarket">
		<div className="image-wrapper">
			<img src={Goldimgone} alt="Goldimgone" />
		</div>
		<div className="space"></div>
		<div className="image-wrapper">
			<img src={Goldimgtwo} alt="Goldimgtwo" />
		</div>
	</div>
  );
}