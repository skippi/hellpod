import "./Stratagem.css";

const stratagemImages: {
  [id: string]: string;
} = {};

const stratagemAssets = Object.values(
  import.meta.glob("../assets/stratagems/*.{png,PNG}", {
    eager: true,
    as: "url",
  }),
);

for (const path of stratagemAssets) {
  const url = new URL(path, import.meta.url).href;
  const name = decodeURI(path).split("/").reverse()[0].replace(/\.[^/.]+$/, "").replace("_", "/").replace("\"", "");
  const id = name.replace(/\s+/g, "-").toLowerCase();
  stratagemImages[id] = url
}

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
