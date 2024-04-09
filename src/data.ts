export const stratagemImages: {
  [id: string]: string;
} = {};

const stratagemAssets = Object.values(
  import.meta.glob("./assets/stratagems/*.{png,PNG}", {
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
