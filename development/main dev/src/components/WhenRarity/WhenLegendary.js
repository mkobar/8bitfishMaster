import * as media from "../Assets";
import moment from "moment";
const chance = require("chance").Chance();

const whenLegendary = (totalTokens) => {
  const issue = totalTokens + 1;
  const rarity = "legendary";
  const day = moment().format("MM-DD-YY");
  const time = moment().format("hh:mm:ss");
  console.log("I am legendary");

  const fishBase = () => {
    const value = chance.weighted(
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 1, 1, 1, 1, 1, 1, 1, 1]
    );
    if (value === 1) {
      return {
        title: media.AFS1E.title,
        asset: media.AFS1E.asset,
        colorTrait: media.AFS1E.color,
        variant: media.AFS1E.var,
        hexTrait: media.AFS1E.hex,
      };
    } else if (value === 2) {
      return {
        title: media.GFS1E.title,
        asset: media.GFS1E.asset,
        colorTrait: media.GFS1E.color,
        variant: media.GFS1E.var,
        hexTrait: media.GFS1E.hex,
      };
    } else if (value === 3) {
      return {
        title: media.DS1E.title,
        asset: media.DS1E.asset,
        colorTrait: media.DS1E.color,
        variant: media.DS1E.var,
        hexTrait: media.DS1E.hex,
      };
    } else if (value === 4) {
      return {
        title: media.CFS1E.title,
        asset: media.CFS1E.asset,
        colorTrait: media.CFS1E.color,
        variant: media.CFS1E.var,
        hexTrait: media.CFS1E.hex,
      };
    } else if (value === 5) {
      return {
        title: media.JFS1E.title,
        asset: media.JFS1E.asset,
        colorTrait: media.JFS1E.color,
        variant: media.JFS1E.var,
        hexTrait: media.JFS1E.hex,
      };
    } else if (value === 6) {
      return {
        title: media.JFS2E.title,
        asset: media.JFS2E.asset,
        colorTrait: media.JFS2E.color,
        variant: media.JFS2E.var,
        hexTrait: media.JFS2E.hex,
      };
    } else if (value === 7) {
      return {
        title: media.SFS1E.title,
        asset: media.SFS1E.asset,
        colorTrait: media.SFS1E.color,
        variant: media.SFS1E.var,
        hexTrait: media.SFS1E.hex,
      };
    } else if (value === 8) {
      return {
        title: media.WFS1E.title,
        asset: media.WFS1E.asset,
        colorTrait: media.WFS1E.color,
        variant: media.WFS1E.var,
        hexTrait: media.WFS1E.hex,
      };
    } else if (value === 9) {
      return {
        title: media.WS1E.title,
        asset: media.WS1E.asset,
        colorTrait: media.WS1E.color,
        variant: media.WS1E.var,
        hexTrait: media.WS1E.hex,
      };
    }
  };
  const fishBaseData = fishBase();
  return {
    currentFish: {
      issue,
      name: fishBaseData.title,
      rarity,
      base: fishBaseData,
      accessories: {
        accessoryA: "none",
        accessoryB: "none",
        accessoryC: "none",
        accessoryD: "none",
      },
      date: {
        day,
        time,
      },
    },
  };
};

export default whenLegendary;
