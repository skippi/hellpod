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

function nameToId(name: string) {
  return name.replace(/\s+/g, "-").toLowerCase();
}

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
    const id = nameToId(name);
    result[id] = {
      id,
      name,
      image: url,
    };
  }
  return result;
}

const armorNames = [
  "B-01 Tactical",
  "B-08 Light Gunner",
  "B-24 Enforcer",
  "B-27 Fortified Commando",
  "CE-07 Demolition Specialist",
  "CE-35 Trench Engineer",
  "CE-67 Titan",
  "CE-74 Breaker",
  "CE-81 Juggernaut",
  "CM-06 Combat Medic",
  "CM-09 Bonesnapper",
  "CM-14 Physician",
  "CM-17 Butcher",
  "CM-21 Trench Paramedic",
  "DP-11 Champion of the People",
  "DP-40 Hero of the Federation",
  "DP-53 Saviour of the Free",
  "EX-00 Prototype X",
  "EX-03 Prototype 3",
  "EX-16 Prototype 16",
  "FS-05 Marksman",
  "FS-11 Executioner",
  "FS-23 Battle Master",
  "FS-34 Exterminator",
  "FS-34 Exterminator",
  "FS-37 Ravager",
  "FS-38 Eradicator",
  "FS-55 Devastator",
  "FS-61 Dreadnought",
  "SA-04 Combat Technician",
  "SA-12 Servo Assisted",
  "SA-25 Steel Trooper",
  "SA-32 Dynamo",
  "SC-15 Drone Master",
  "SC-15 Trailblazer Scout",
  "SC-34 Infiltrator",
  "SC-37 Legionnaire",
  "TR-117 Alpha Commander",
  "TR-62 Knight",
  "TR-7 Ambassador of the Brand",
  "TR-9 Cavalier of Democracy",
];

export const stratagemData = assetsToItemMap(stratagemAssets);
export const boosterData = assetsToItemMap(boosterAssets);
export const primaryData = assetsToItemMap(primaryAssets);
export const secondaryData = assetsToItemMap(secondaryAssets);
export const grenadeData = assetsToItemMap(grenadeAssets);
export const armorData = (() => {
  const result: ItemDataMap = {};
  for (const name of armorNames) {
    const entry = { name, id: nameToId(name), image: "" };
    result[entry.id] = entry;
  }
  return result;
})();
export const itemData = {
  ...primaryData,
  ...secondaryData,
  ...grenadeData,
  ...armorData,
};
