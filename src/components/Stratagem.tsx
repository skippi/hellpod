import { stratagemData } from "@/data";
import "./Stratagem.css";

function Stratagem({ option }: { option?: string }) {
  let entry = null;
  if (option && option in stratagemData) {
    entry = stratagemData[option];
  }
  return (
    <div className="stratagem">
      <div className="stratagemInner">
        {entry && <img className="stratagemIcon" src={entry.image} />}
      </div>
    </div>
  );
}

export default Stratagem;
