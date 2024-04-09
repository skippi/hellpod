import "./Stratagem.css";
import { stratagemImages } from "@/data"

function Stratagem({ option }: { option?: string }) {
  let img = null;
  if (option !== undefined && option in stratagemImages) {
    img = stratagemImages[option]
  }
  return (
    <div className="stratagem">
      <div className="stratagemInner">
        {img !== null && <img className="stratagemIcon" src={img} />}
      </div>
    </div>
  );
}

export default Stratagem;
