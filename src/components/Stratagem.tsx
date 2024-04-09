import "./Stratagem.css";
import { stratagemData } from "@/data"

function Stratagem({ option }: { option?: string }) {
  let entry = null;
  if (option && option in stratagemData) {
    entry = stratagemData[option]
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
