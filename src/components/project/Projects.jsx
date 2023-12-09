import "./Projects.css";
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

const contentStyle = {
  height: "500px",
};

const Project = () => {
  return (
    <>
      <Carousel autoplay>
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
      </Carousel>
    </>
  );
};
export default Project;
