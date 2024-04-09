import { itemData } from "@/data";
import "./Item.css"

function Item({ option }: { option?: string }) {
  let entry = null;
  if (option && option in itemData) {
    entry = itemData[option]
  }
  return <div className='item'>
    <div className='itemInner'>
        {entry && <img className="itemIcon" src={entry.image} />}
    </div>
  </div>
}

export default Item
