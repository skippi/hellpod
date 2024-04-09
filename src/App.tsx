import { MdOutlineContentCopy } from "react-icons/md";
import './App.css';
import Booster from './components/Booster';
import Item from './components/Item';
import Stratagem from './components/Stratagem';

function App() {
  return (
    <div className="main">
      <div className='title'>HELLPOD.IO</div>
      <div className='subtitle'>Helldivers 2 Builder</div>
      <div className='itemGrid'>
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <div className='stratagemGrid'>
        <Stratagem option="arc-3-arc-thrower" />
        <Stratagem option="ax/las-5-guard-dog-rover" />
        <Stratagem option="eagle-airstrike" />
        <Stratagem option="eagle-500kg-bomb" />
      </div>
      <div className="boosterSection">
        <Booster />
        <div className='boosterName'>INCREASED REINFORCEMENT BUDGET</div>
      </div>
      <div className='shareSection'>
        <div className='randomizeButton'>RANDOMIZE</div>
        <div className='shareButton'>
          <MdOutlineContentCopy color="#5D854A" size={32} />
        </div>
      </div>
      <div className='footer'>
        © skippi, 2024
        <br />
        All Helldivers art belongs to Arrowhead Studios
      </div>
    </div>
  )
}

export default App
