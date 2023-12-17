import { Carousel } from "antd";
import Basement from "../../assets/images/Projects/BasementRemodel.jpg";
import ceiling from "../../assets/images/Projects/ceiling.jpg";
import Deck from "../../assets/images/Projects/Deck.jpg";
import DeckStairs from "../../assets/images/Projects/DeckStairs.jpg";
import kitchenSink from "../../assets/images/Projects/kitchenSink.jpeg";
import Plumbing from "../../assets/images/Projects/Plumbing.jpg";
import Shower from "../../assets/images/Projects/Shower.jpg";
import WastePump from "../../assets/images/Projects/WastePump.jpg";
import BRoom from "../../assets/images/Projects/BRoom.jpg";
import BackDoor from "../../assets/images/Projects/BackDoor.jpg";
import Insulation from "../../assets/images/Projects/Insulation.jpg";
import LittleStairs from "../../assets/images/Projects/LittleStairs.jpg";
import OutdoorPatio from "../../assets/images/Projects/OutdoorPatio.jpg";
import ShowerTile from "../../assets/images/Projects/ShowerTile.jpg";
import Pole from "../../assets/images/Projects/Pole.jpg";
import Fence from "../../assets/images/Projects/Fence.jpg";
import Drywall from "../../assets/images/Projects/Drywall.jpg";
import Flooring from "../../assets/images/Projects/Flooring.jpg";
import NBRoom from "../../assets/images/Projects/NBRoom.jpg";
import Homie from "../../assets/images/Projects/Homie.jpg";
import OBRoom from "../../assets/images/Projects/OBRoom.jpg";

const contentStyle = {
  height: "500px",
};

function CarouselImages() {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>
            <img src={OutdoorPatio} alt="" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src={Basement} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src={BRoom} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src={Shower} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src={Homie} alt="" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src={DeckStairs} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src={WastePump} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src={kitchenSink} />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src={Plumbing} />
          </h3>
        </div>

        <div>
          <h3 style={contentStyle}>
            <img src={Deck} />
          </h3>
        </div>

        <div>
          <h3 style={contentStyle}>
            <img src={ceiling} alt="" />
          </h3>
        </div>

        <div>
          <h3 style={contentStyle}>
            <img src={BackDoor} alt="" />
          </h3>
        </div>

        <div>
          <h3 style={contentStyle}>
            <img src={Insulation} alt="" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src={LittleStairs} alt="" />
          </h3>
        </div>

        <div>
          <h3 style={contentStyle}>
            <img src={ShowerTile} alt="" />
          </h3>
        </div>

        <div>
          <h3 style={contentStyle}>
            <img src={NBRoom} alt="" />
          </h3>
        </div>

        <div>
          <h3 style={contentStyle}>
            <img src={OBRoom} alt="" />
          </h3>
        </div>

        <div>
          <h3 style={contentStyle}>
            <img src={Flooring} alt="" />
          </h3>
        </div>

        <div>
          <h3 style={contentStyle}>
            <img src={Drywall} alt="" />
          </h3>
        </div>

        <div>
          <h3 style={contentStyle}>
            <img src={Fence} alt="" />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img src={Pole} alt="" />
          </h3>
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselImages;
