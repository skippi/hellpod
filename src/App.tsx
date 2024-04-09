import { MdOutlineContentCopy } from "react-icons/md";
import "./App.css";
import Booster from "./components/Booster";
import Item from "./components/Item";
import Stratagem from "./components/Stratagem";
import { boosterData, itemData, stratagemData } from "./data";
import { useState } from "react";

function chooseRandomKey<K extends string | number | symbol, V>(map: Record<K, V>) {
  const items = Object.keys(map);
  return items[Math.floor(Math.random() * items.length)];
}

function App() {
  const [primary, setPrimary] = useState(chooseRandomKey(itemData))
  const [stratagems, setStratagems] = useState([
    chooseRandomKey(stratagemData),
    chooseRandomKey(stratagemData),
    chooseRandomKey(stratagemData),
    chooseRandomKey(stratagemData),
  ]);
  const [booster, setBooster] = useState(chooseRandomKey(boosterData))

  const randomizeButtonClick = () => {
    setPrimary(chooseRandomKey(itemData))
    setStratagems(stratagems.map(() => chooseRandomKey(stratagemData)))
    setBooster(chooseRandomKey(boosterData))
  }

  console.log(primary)
  console.log(itemData)

  return (
    <div className="main">
      <div className="title">HELLPOD.IO</div>
      <div className="subtitle">Helldivers 2 Builder</div>
      <div className="itemGrid">
        <Item option={primary} />
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
        <Booster option={booster} />
        <div className="boosterName">
          {boosterData[booster].name.toUpperCase()}
        </div>
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
