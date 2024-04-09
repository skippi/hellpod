import { MdOutlineContentCopy } from "react-icons/md";
import "./App.css";
import Booster from "./components/Booster";
import Item from "./components/Item";
import Stratagem from "./components/Stratagem";
import { stratagemImages } from "./data";
import { useState } from "react";

function randomStratagemId() {
  const items = Object.keys(stratagemImages);
  return items[Math.floor(Math.random() * items.length)];
}

function App() {
  const [stratagems, setStratagems] = useState([
    randomStratagemId(),
    randomStratagemId(),
    randomStratagemId(),
    randomStratagemId(),
  ]);

  const randomizeButtonClick = () => {
    setStratagems(stratagems.map(() => randomStratagemId()))
  }

  return (
    <div className="main">
      <div className="title">HELLPOD.IO</div>
      <div className="subtitle">Helldivers 2 Builder</div>
      <div className="itemGrid">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <div className="stratagemGrid">
        {stratagems.map((id) => (
          <Stratagem option={id} />
        ))}
      </div>
      <div className="boosterSection">
        <Booster />
        <div className="boosterName">INCREASED REINFORCEMENT BUDGET</div>
      </div>
      <div className="shareSection">
        <div className="randomizeButton" onClick={randomizeButtonClick}>RANDOMIZE</div>
        <div className="shareButton">
          <MdOutlineContentCopy color="#5D854A" size={32} />
        </div>
      </div>
      <div className="footer">
        © skippi, 2024
        <br />
        All Helldivers art belongs to Arrowhead Studios
      </div>
    </div>
  );
}

export default App;
