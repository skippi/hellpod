interface ItemData {
  id: string;
  name: string;
  image: string;
}

type ItemDataMap = { [id: string]: ItemData };

const stratagemAssets = Object.values(
  import.meta.glob("./assets/stratagems/*.{png,PNG}", {
    eager: true,
    as: "url",
  }),
);

const boosterAssets = Object.values(
  import.meta.glob("./assets/boosters/*.{png,PNG}", {
    eager: true,
    as: "url",
  }),
);

const primaryAssets = Object.values(
  import.meta.glob("./assets/primaries/*.{webp,WEBP}", {
    eager: true,
    as: "url",
  }),
);

const secondaryAssets = Object.values(
  import.meta.glob("./assets/secondaries/*.{webp,WEBP}", {
    eager: true,
    as: "url",
  }),
);

const grenadeAssets = Object.values(
  import.meta.glob("./assets/grenades/*.{webp,WEBP}", {
    eager: true,
    as: "url",
  }),
);

function assetsToItemMap(assets: string[]): ItemDataMap {
  const result: ItemDataMap = {};
  for (const path of assets) {
    const url = new URL(path, import.meta.url).href;
    const name = decodeURI(path)
      .split("/")
      .reverse()[0]
      .replace(/\.[^/.]+$/, "")
      .replace("_", "/")
      .replace('"', "");
    const id = name.replace(/\s+/g, "-").toLowerCase();
    result[id] = {
      id,
      name,
      image: url,
    };
  }
  return result;
}

export const stratagemData = assetsToItemMap(stratagemAssets);
export const boosterData = assetsToItemMap(boosterAssets);
export const primaryData = assetsToItemMap(primaryAssets);
export const secondaryData = assetsToItemMap(secondaryAssets);
export const grenadeData = assetsToItemMap(grenadeAssets);
export const itemData = { ...primaryData, ...secondaryData, ...grenadeData };
