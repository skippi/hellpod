import { MdOutlineContentCopy } from "react-icons/md";
import "./App.css";
import Booster from "./components/Booster";
import Item from "./components/Item";
import Stratagem from "./components/Stratagem";
import {
  armorData,
  boosterData,
  grenadeData,
  primaryData,
  secondaryData,
  stratagemData,
} from "./data";
import { useState } from "react";

function recordSample<K extends string | number | symbol, V>(
  record: Record<K, V>,
  n: number,
) {
  const arr = Object.keys(record);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr.slice(0, n);
}

function recordChoice<K extends string | number | symbol, V>(
  map: Record<K, V>,
) {
  const items = Object.keys(map);
  return items[Math.floor(Math.random() * items.length)];
}

function App() {
  const [primary, setPrimary] = useState(recordChoice(primaryData));
  const [secondary, setSecondary] = useState(recordChoice(secondaryData));
  const [grenade, setGrenade] = useState(recordChoice(grenadeData));
  const [stratagems, setStratagems] = useState(recordSample(stratagemData, 4));
  const [booster, setBooster] = useState(recordChoice(boosterData));
  const [armor, setArmor] = useState(recordChoice(armorData));

  const randomizeAll = () => {
    setPrimary(recordChoice(primaryData));
    setSecondary(recordChoice(secondaryData));
    setGrenade(recordChoice(grenadeData));
    setStratagems(recordSample(stratagemData, 4));
    setBooster(recordChoice(boosterData));
    setArmor(recordChoice(armorData));
  };

  return (
    <div className="main">
      <div className="title">HELLPOD.IO</div>
      <div className="subtitle">Helldivers 2 Builder</div>
      <div className="itemGrid">
        <Item option={primary} />
        <Item option={secondary} />
        <Item option={grenade} />
        <Item option={armor} />
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
        <div className="randomizeButton" onClick={randomizeAll}>
          RANDOMIZE
        </div>
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
