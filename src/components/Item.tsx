import { itemData } from "@/data";
import "./Item.css";

function Item({ option }: { option?: string }) {
  let entry = null;
  if (option && option in itemData) {
    entry = itemData[option];
  }
  return (
    <div className="item">
      <div className="itemInner">
        {entry && entry.image && <img className="itemIcon" src={entry.image} />}
        {entry && <div className="itemHint">{entry.name}</div>}
      </div>
    </div>
  );
}

// <!-- {entry.name.substr(0, entry.name.indexOf(" ") + 1)} -->
export default Item;
