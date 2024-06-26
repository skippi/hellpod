import { boosterData } from "@/data";
import { useState } from "react";
import "./Booster.css";

const defaultBorderColor = "#676767";
const hoverBorderColor = "#a7a7a7";

function Booster({ option }: { option?: string }) {
  const [borderColor, setBorderColor] = useState(defaultBorderColor);
  let entry = null;
  if (option && option in boosterData) {
    entry = boosterData[option];
  }
  return (
    <div
      className="booster"
      onMouseEnter={() => setBorderColor(hoverBorderColor)}
      onMouseLeave={() => setBorderColor(defaultBorderColor)}
    >
      <svg
        className="boosterInner"
        width="97"
        viewBox="0 0 100 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 43L30 8.35899H70L90 43L70 77.641H30L10 43Z"
          fill="#2A2A2A"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 43L27.5 4.02887H72.5L95 43L72.5 81.9712H27.5L5 43ZM0.381195 43L25.1906 0.0288696H74.8094L99.6188 43L74.8094 85.9712H25.1906L0.381195 43Z"
          fill={borderColor}
        />
      </svg>
      {entry && <img className="boosterIcon" src={entry.image} />}
    </div>
  );
}

export default Booster;
