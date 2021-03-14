import * as media from "../Assets";
import moment from "moment";
const chance = require("chance").Chance();

const WhenCommon = (totalTokens) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  //   setBackground(media.commonBG.asset); //replace in final response to connect to rarity
  const issue = totalTokens + 1;
  console.log("I am common");
  const rarity = "common";
  const day = moment().format("MM-DD-YY");
  const time = moment().format("hh:mm:ss");
  const choices = ["clown fish", "gold fish"];
  const whichFish = choices[getRandomInt(2)];
  if (whichFish === "clown fish") {
    console.log("I am clown fish");

    const fishBase = () => {
      const value = chance.weighted([1, 2, 3, 4, 5], [1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.CF1E.asset,
          colorTrait: media.CF1E.color,
          variant: media.CF1E.var,
          hexTrait: media.CF1E.hex,
        };
      } else if (value === 2) {
        return {
          asset: media.CF2E.asset,
          colorTrait: media.CF2E.color,
          variant: media.CF2E.var,
          hexTrait: media.CF2E.hex,
        };
      } else if (value === 3) {
        return {
          asset: media.CF3E.asset,
          colorTrait: media.CF3E.color,
          variant: media.CF3E.var,
          hexTrait: media.CF3E.hex,
        };
      } else if (value === 4) {
        return {
          asset: media.CF4E.asset,
          colorTrait: media.CF4E.color,
          variant: media.CF4E.var,
          hexTrait: media.CF4E.hex,
        };
      } else if (value === 5) {
        return {
          asset: media.CF5E.asset,
          colorTrait: media.CF5E.color,
          variant: media.CF5E.var,
          hexTrait: media.CF5E.hex,
        };
      }
    };
    const accessoryA = () => {
      const value = chance.weighted([null, 1, 2, 3, 4, 5], [1, 1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.CFA1E.asset,
          name: media.CFA1E.title,
          color: media.CFA1E.color,
        };
      } else if (value === 2) {
        return {
          asset: media.CFA2E.asset,
          name: media.CFA2E.title,
          color: media.CFA2E.color,
        };
      } else if (value === 3) {
        return {
          asset: media.CFA3E.asset,
          name: media.CFA3E.title,
          color: media.CFA3E.color,
        };
      } else if (value === 4) {
        return {
          asset: media.CFA4E.asset,
          name: media.CFA4E.title,
          color: media.CFA4E.color,
        };
      } else if (value === 5) {
        return {
          asset: media.CFA5E.asset,
          name: media.CFA5E.title,
          color: media.CFA5E.color,
        };
      } else {
        return "none";
      }
    };

    const accessoryB = () => {
      const value = chance.weighted([null, 1, 2, 3, 4, 5], [1, 1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.CFB1E.asset,
          name: media.CFB1E.title,
          color: media.CFB1E.color,
        };
      } else if (value === 2) {
        return {
          asset: media.CFB2E.asset,
          name: media.CFB2E.title,
          color: media.CFB2E.color,
        };
      } else if (value === 3) {
        return {
          asset: media.CFB3E.asset,
          name: media.CFB3E.title,
          color: media.CFB3E.color,
        };
      } else if (value === 4) {
        return {
          asset: media.CFB4E.asset,
          name: media.CFB4E.title,
          color: media.CFB4E.color,
        };
      } else if (value === 5) {
        return {
          asset: media.CFB5E.asset,
          name: media.CFB5E.title,
          color: media.CFB5E.color,
        };
      } else {
        return "none";
      }
    };

    return {
      currentFish: {
        issue,
        name: whichFish,
        rarity,
        base: fishBase(),
        accessories: {
          accessoryA: accessoryA(),
          accessoryB: accessoryB(),
          accessoryC: "none",
          accessoryD: "none",
        },
        date: {
          day,
          time,
        },
      },
    };
  } else {
    console.log("I am gold fish");

    const fishBase = () => {
      const value = chance.weighted([1, 2, 3, 4, 5], [1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.GF1E.asset,
          colorTrait: media.GF1E.color,
          variant: media.GF1E.var,
          hexTrait: media.GF1E.hex,
        };
      } else if (value === 2) {
        return {
          asset: media.GF2E.asset,
          colorTrait: media.GF2E.color,
          variant: media.GF2E.var,
          hexTrait: media.GF2E.hex,
        };
      } else if (value === 3) {
        return {
          asset: media.GF3E.asset,
          colorTrait: media.GF3E.color,
          variant: media.GF3E.var,
          hexTrait: media.GF3E.hex,
        };
      } else if (value === 4) {
        return {
          asset: media.GF4E.asset,
          colorTrait: media.GF4E.color,
          variant: media.GF4E.var,
          hexTrait: media.GF4E.hex,
        };
      } else if (value === 5) {
        return {
          asset: media.GF5E.asset,
          colorTrait: media.GF5E.color,
          variant: media.GF5E.var,
          hexTrait: media.GF5E.hex,
        };
      }
    };
    const accessoryA = () => {
      const value = chance.weighted([null, 1, 2, 3, 4, 5], [1, 1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.GFA1E.asset,
          name: media.GFA1E.title,
          color: media.GFA1E.color,
        };
      } else if (value === 2) {
        return {
          asset: media.GFA2E.asset,
          name: media.GFA2E.title,
          color: media.GFA2E.color,
        };
      } else if (value === 3) {
        return {
          asset: media.GFA3E.asset,
          name: media.GFA3E.title,
          color: media.GFA3E.color,
        };
      } else if (value === 4) {
        return {
          asset: media.GFA4E.asset,
          name: media.GFA4E.title,
          color: media.GFA4E.color,
        };
      } else if (value === 5) {
        return {
          asset: media.GFA5E.asset,
          name: media.GFA5E.title,
          color: media.GFA5E.color,
        };
      } else {
        return "none";
      }
    };

    const accessoryB = () => {
      const value = chance.weighted([null, 1, 2, 3, 4, 5], [1, 1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.GFB1E.asset,
          name: media.GFB1E.title,
          color: media.GFB1E.color,
        };
      } else if (value === 2) {
        return {
          asset: media.GFB2E.asset,
          name: media.GFB2E.title,
          color: media.GFB2E.color,
        };
      } else if (value === 3) {
        return {
          asset: media.GFB3E.asset,
          name: media.GFB3E.title,
          color: media.GFB3E.color,
        };
      } else if (value === 4) {
        return {
          asset: media.GFB4E.asset,
          name: media.GFB4E.title,
          color: media.GFB4E.color,
        };
      } else if (value === 5) {
        return {
          asset: media.GFB5E.asset,
          name: media.GFB5E.title,
          color: media.GFB5E.color,
        };
      } else {
        return "none";
      }
    };

    //add if a and b are blank then do this
    const accessoryC = () => {
      const value = chance.weighted([null, 1, 2, 3], [1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.GFC1E.asset,
          name: media.GFC1E.title,
          color: media.GFC1E.color,
        };
      } else if (value === 2) {
        return {
          asset: media.GFC2E.asset,
          name: media.GFC2E.title,
          color: media.GFC2E.color,
        };
      } else if (value === 3) {
        return {
          asset: media.GFC3E.asset,
          name: media.GFC3E.title,
          color: media.GFC3E.color,
        };
      } else {
        return "none";
      }
    };
    return {
      currentFish: {
        issue,
        name: whichFish,
        rarity,
        base: fishBase(),
        accessories: {
          accessoryA: accessoryA(),
          accessoryB: accessoryB(),
          accessoryC: accessoryC(),
          accessoryD: "none",
        },
        date: {
          day,
          time,
        },
      },
    };
  }
};

export default WhenCommon;
