import * as media from "../Assets";
import moment from "moment";
const chance = require("chance").Chance();

const whenEpic = (totalTokens) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  console.log("I am epic");
  const issue = totalTokens + 1;
  const rarity = "uncommon";
  const day = moment().format("MM-DD-YY");
  const time = moment().format("hh:mm:ss");
  const choices = ["dead fish", "dolphin", "jelly fish"];
  const whichFish = choices[getRandomInt(3)];
  if (whichFish === "dead fish") {
    console.log("i am a dead fish");

    const fishBase = () => {
      const value = chance.weighted([1, 2, 3, 4, 5], [1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.DF1E.asset,
          colorTrait: media.DF1E.color,
          variant: media.DF1E.var,
          hexTrait: media.DF1E.hex,
        };
      } else if (value === 2) {
        return {
          asset: media.DF2E.asset,
          colorTrait: media.DF2E.color,
          variant: media.DF2E.var,
          hexTrait: media.DF2E.hex,
        };
      } else if (value === 3) {
        return {
          asset: media.DF3E.asset,
          colorTrait: media.DF3E.color,
          variant: media.DF3E.var,
          hexTrait: media.DF3E.hex,
        };
      } else if (value === 4) {
        return {
          asset: media.DF4E.asset,
          colorTrait: media.DF4E.color,
          variant: media.DF4E.var,
          hexTrait: media.DF4E.hex,
        };
      } else if (value === 5) {
        return {
          asset: media.DF5E.asset,
          colorTrait: media.DF5E.color,
          variant: media.DF5E.var,
          hexTrait: media.DF5E.hex,
        };
      }
    };

    return {
      currentFish: {
        issue,
        name: whichFish,
        rarity,
        base: fishBase(),
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
  } else if (whichFish === "dolphin") {
    console.log("I am dolphin");

    const fishBase = () => {
      const value = chance.weighted([1, 2, 3, 4, 5], [1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.D1E.asset,
          colorTrait: media.D1E.color,
          variant: media.D1E.var,
          hexTrait: media.D1E.hex,
        };
      } else if (value === 2) {
        return {
          asset: media.D2E.asset,
          colorTrait: media.D2E.color,
          variant: media.D2E.var,
          hexTrait: media.D2E.hex,
        };
      } else if (value === 3) {
        return {
          asset: media.D3E.asset,
          colorTrait: media.D3E.color,
          variant: media.D3E.var,
          hexTrait: media.D3E.hex,
        };
      } else if (value === 4) {
        return {
          asset: media.D4E.asset,
          colorTrait: media.D4E.color,
          variant: media.D4E.var,
          hexTrait: media.D4E.hex,
        };
      } else if (value === 5) {
        return {
          asset: media.D5E.asset,
          colorTrait: media.D5E.color,
          variant: media.D5E.var,
          hexTrait: media.D5E.hex,
        };
      }
    };

    const accessoryA = () => {
      const value = chance.weighted([null, 1, 2, 3, 4, 5], [1, 1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.DA1E.asset,
          name: media.DA1E.title,
          color: media.DA1E.color,
        };
      } else if (value === 2) {
        return {
          asset: media.DA2E.asset,
          name: media.DA2E.title,
          color: media.DA2E.color,
        };
      } else if (value === 3) {
        return {
          asset: media.DA3E.asset,
          name: media.DA3E.title,
          color: media.DA3E.color,
        };
      } else if (value === 4) {
        return {
          asset: media.DA4E.asset,
          name: media.DA4E.title,
          color: media.DA4E.color,
        };
      } else if (value === 5) {
        return {
          asset: media.DA5E.asset,
          name: media.DA5E.title,
          color: media.DA5E.color,
        };
      } else {
        return "none";
      }
    };

    const accessoryB = () => {
      const value = chance.weighted([null, 1, 2, 3, 4, 5], [1, 1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.DB1E.asset,
          name: media.DB1E.title,
          color: media.DB1E.color,
        };
      } else if (value === 2) {
        return {
          asset: media.DB2E.asset,
          name: media.DB2E.title,
          color: media.DB2E.color,
        };
      } else if (value === 3) {
        return {
          asset: media.DB3E.asset,
          name: media.DB3E.title,
          color: media.DB3E.color,
        };
      } else if (value === 4) {
        return {
          asset: media.DB4E.asset,
          name: media.DB4E.title,
          color: media.DB4E.color,
        };
      } else if (value === 5) {
        return {
          asset: media.DB5E.asset,
          name: media.DB5E.title,
          color: media.DB5E.color,
        };
      } else {
        return "none";
      }
    };

    const accessoryC = () => {
      const value = chance.weighted([null, 1, 2], [1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.DC1E.asset,
          name: media.DC1E.title,
          color: media.DC1E.color,
        };
      } else if (value === 2) {
        return {
          asset: media.DC2E.asset,
          name: media.DC2E.title,
          color: media.DC2E.color,
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
  } else {
    console.log("I am a jelly fish");

    const fishBase = () => {
      const value = chance.weighted([1, 2, 3, 4, 5], [1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.JF1E.asset,
          colorTrait: media.JF1E.color,
          variant: media.JF1E.var,
          hexTrait: media.JF1E.hex,
        };
      } else if (value === 2) {
        return {
          asset: media.JF2E.asset,
          colorTrait: media.JF2E.color,
          variant: media.JF2E.var,
          hexTrait: media.JF2E.hex,
        };
      } else if (value === 3) {
        return {
          asset: media.JF3E.asset,
          colorTrait: media.JF3E.color,
          variant: media.JF3E.var,
          hexTrait: media.JF3E.hex,
        };
      } else if (value === 4) {
        return {
          asset: media.JF4E.asset,
          colorTrait: media.JF4E.color,
          variant: media.JF4E.var,
          hexTrait: media.JF4E.hex,
        };
      } else if (value === 5) {
        return {
          asset: media.JF5E.asset,
          colorTrait: media.JF5E.color,
          variant: media.JF5E.var,
          hexTrait: media.JF5E.hex,
        };
      }
    };

    const accessoryA = () => {
      const value = chance.weighted([null, 1, 2, 3, 4, 5], [1, 1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.JFA1E.asset,
          name: media.JFA1E.title,
          color: media.JFA1E.color,
        };
      } else if (value === 2) {
        return {
          asset: media.JFA2E.asset,
          name: media.JFA2E.title,
          color: media.JFA2E.color,
        };
      } else if (value === 3) {
        return {
          asset: media.JFA3E.asset,
          name: media.JFA3E.title,
          color: media.JFA3E.color,
        };
      } else if (value === 4) {
        return {
          asset: media.JFA4E.asset,
          name: media.JFA4E.title,
          color: media.JFA4E.color,
        };
      } else if (value === 5) {
        return {
          asset: media.JFA5E.asset,
          name: media.JFA5E.title,
          color: media.JFA5E.color,
        };
      } else {
        return "none";
      }
    };

    const accessoryB = () => {
      const value = chance.weighted([null, 1, 2, 3, 4, 5], [1, 1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.JFB1E.asset,
          name: media.JFB1E.title,
          color: media.JFB1E.color,
        };
      } else if (value === 2) {
        return {
          asset: media.JFB2E.asset,
          name: media.JFB2E.title,
          color: media.JFB2E.color,
        };
      } else if (value === 3) {
        return {
          asset: media.JFB3E.asset,
          name: media.JFB3E.title,
          color: media.JFB3E.color,
        };
      } else if (value === 4) {
        return {
          asset: media.JFB4E.asset,
          name: media.JFB4E.title,
          color: media.JFB4E.color,
        };
      } else if (value === 5) {
        return {
          asset: media.JFB5E.asset,
          name: media.JFB5E.title,
          color: media.JFB5E.color,
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
  }
};

export default whenEpic;
