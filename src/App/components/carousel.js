import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import akatsukigroup from "./assets/akatsuki-group.png";
import deidara from "./assets/deidara.png";
import hidan from "./assets/hidan.png";
import itachi from "./assets/itachi.png";
import kakuzu from "./assets/kakuzu.png";
import kisame from "./assets/kisame.png";
import madara from "./assets/madara.png";
import konan from "./assets/konan.png";
import nagato from "./assets/nagato.png";
import pain from "./assets/pain.png";
import obito from "./assets/obito.png";
import tobi from "./assets/tobi.jfif";
import orochimaru from "./assets/orochimaru.png";
import sasori from "./assets/sasori.png";
import taka from "./assets/taka.png";
import zetsu from "./assets/zetsu.png";
import content from "../content";

function MainSlide() {
  return (
    <div className="carousel-container">
    <Carousel fade>
      {content.map((item, index) => {
        return (
          
            <Carousel.Item>
              <Link to={`/card/${index}`}>
              <img
                className="d-xsm-block w-50"
                src={item.characterImg}
                alt="Konan of the Hidden Rain"
              />
              </Link>
              <Carousel.Caption className="bg-black">
                <h2>{item.characterName}</h2>
                <p>{item.characterText}</p>
              </Carousel.Caption>
            </Carousel.Item>
          
        )})}
    </Carousel >
</div>
  )
}


export default MainSlide