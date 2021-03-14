import * as media from "../Assets";
import moment from "moment";
const chance = require("chance").Chance();

const whenUncommon = (totalTokens) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  console.log("I am uncommon");
  const issue = totalTokens + 1;
  const rarity = "uncommon";
  const day = moment().format("MM-DD-YY");
  const time = moment().format("hh:mm:ss");
  const choices = ["angel fish", "skinny fish"];
  const whichFish = choices[getRandomInt(2)];

  if (whichFish === "angel fish") {
    console.log("I am a angel fish");

    const fishBase = () => {
      const value = chance.weighted([1, 2, 3, 4, 5], [1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.AF1E.asset,
          colorTrait: media.AF1E.color,
          variant: media.AF1E.var,
          hexTrait: media.AF1E.hex,
        };
      } else if (value === 2) {
        return {
          asset: media.AF2E.asset,
          colorTrait: media.AF2E.color,
          variant: media.AF2E.var,
          hexTrait: media.AF2E.hex,
        };
      } else if (value === 3) {
        return {
          asset: media.AF3E.asset,
          colorTrait: media.AF3E.color,
          variant: media.AF3E.var,
          hexTrait: media.AF3E.hex,
        };
      } else if (value === 4) {
        return {
          asset: media.AF4E.asset,
          colorTrait: media.AF4E.color,
          variant: media.AF4E.var,
          hexTrait: media.AF4E.hex,
        };
      } else if (value === 5) {
        return {
          asset: media.AF5E.asset,
          colorTrait: media.AF5E.color,
          variant: media.AF5E.var,
          hexTrait: media.AF5E.hex,
        };
      }
    };

    const accessoryA = () => {
      const value = chance.weighted([null, 1, 2, 3, 4], [1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.AFA1E.asset,
          name: media.AFA1E.title,
          color: media.AFA1E.color,
        };
      } else if (value === 2) {
        return {
          asset: media.AFA2E.asset,
          name: media.AFA2E.title,
          color: media.AFA2E.color,
        };
      } else if (value === 3) {
        return {
          asset: media.AFA3E.asset,
          name: media.AFA3E.title,
          color: media.AFA3E.color,
        };
      } else if (value === 4) {
        return {
          asset: media.AFA4E.asset,
          name: media.AFA4E.title,
          color: media.AFA4E.color,
        };
      } else {
        return "none";
      }
    };

    const accessoryB = () => {
      const value = chance.weighted([null, 1, 2, 3, 4], [1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.AFB1E.asset,
          name: media.AFB1E.title,
          color: media.AFB1E.color,
        };
      } else if (value === 2) {
        return {
          asset: media.AFB2E.asset,
          name: media.AFB2E.title,
          color: media.AFB2E.color,
        };
      } else if (value === 3) {
        return {
          asset: media.AFB3E.asset,
          name: media.AFB3E.title,
          color: media.AFB3E.color,
        };
      } else if (value === 4) {
        return {
          asset: media.AFB4E.asset,
          name: media.AFB4E.title,
          color: media.AFB4E.color,
        };
      } else {
        return "none";
      }
    };

    //add if a and b are blank then do this
    const accessoryC = () => {
      const value = chance.weighted([null, 1, 2, 3, 4], [1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.AFCa1E.asset,
          name: media.AFCa1E.title,
          color: media.AFCa1E.color,
        };
      } else if (value === 2) {
        return {
          asset: media.AFCb2E.asset,
          name: media.AFCb2E.title,
          color: media.AFCb2E.color,
        };
      } else if (value === 3) {
        return {
          asset: media.AFCc3E.asset,
          name: media.AFCc3E.title,
          color: media.AFCc3E.color,
        };
      } else if (value === 4) {
        return {
          asset: media.AFC4E.asset,
          name: media.AFC4E.title,
          color: media.AFC4E.color,
        };
      } else {
        return "none";
      }
    };

    const accessoryD = () => {
      const value = chance.weighted([null, 1, 2, 3, 4], [1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.AFD1E.asset,
          name: media.AFD1E.title,
          color: media.AFD1E.color,
        };
      } else if (value === 2) {
        return {
          asset: media.AFD2E.asset,
          name: media.AFD2E.title,
          color: media.AFD2E.color,
        };
      } else if (value === 3) {
        return {
          asset: media.AFD3E.asset,
          name: media.AFD3E.title,
          color: media.AFD3E.color,
        };
      } else if (value === 3) {
        return {
          asset: media.AFD4E.asset,
          name: media.AFD4E.title,
          color: media.AFD4E.color,
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
          accessoryD: accessoryD(),
        },
        date: {
          day,
          time,
        },
      },
    };
  } else {
    console.log("I am a skinny fish");

    const fishBase = () => {
      const value = chance.weighted([1, 2, 3, 4, 5], [1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.SF1E.asset,
          colorTrait: media.SF1E.color,
          variant: media.SF1E.var,
          hexTrait: media.SF1E.hex,
        };
      } else if (value === 2) {
        return {
          asset: media.SF2E.asset,
          colorTrait: media.SF2E.color,
          variant: media.SF2E.var,
          hexTrait: media.SF2E.hex,
        };
      } else if (value === 3) {
        return {
          asset: media.SF3E.asset,
          colorTrait: media.SF3E.color,
          variant: media.SF3E.var,
          hexTrait: media.SF3E.hex,
        };
      } else if (value === 4) {
        return {
          asset: media.SF4E.asset,
          colorTrait: media.SF4E.color,
          variant: media.SF4E.var,
          hexTrait: media.SF4E.hex,
        };
      } else if (value === 5) {
        return {
          asset: media.SF5E.asset,
          colorTrait: media.SF5E.color,
          variant: media.SF5E.var,
          hexTrait: media.SF5E.hex,
        };
      }
    };

    const accessoryA = () => {
      const value = chance.weighted([null, 1, 2, 3, 4, 5], [1, 1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.SFA1E.asset,
          name: media.SFA1E.title,
          color: media.SFA1E.color,
        };
      } else if (value === 2) {
        return {
          asset: media.SFA2E.asset,
          name: media.SFA2E.title,
          color: media.SFA2E.color,
        };
      } else if (value === 3) {
        return {
          asset: media.SFA3E.asset,
          name: media.SFA3E.title,
          color: media.SFA3E.color,
        };
      } else if (value === 4) {
        return {
          asset: media.SFA4E.asset,
          name: media.SFA4E.title,
          color: media.SFA4E.color,
        };
      } else if (value === 5) {
        return {
          asset: media.SFA5E.asset,
          name: media.SFA5E.title,
          color: media.SFA5E.color,
        };
      } else {
        return "none";
      }
    };

    const accessoryB = () => {
      const value = chance.weighted([null, 1, 2, 3, 4, 5], [1, 1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.SFB1E.asset,
          name: media.SFB1E.title,
          color: media.SFB1E.color,
        };
      } else if (value === 2) {
        return {
          asset: media.SFB2E.asset,
          name: media.SFB2E.title,
          color: media.SFB2E.color,
        };
      } else if (value === 3) {
        return {
          asset: media.SFB3E.asset,
          name: media.SFB3E.title,
          color: media.SFB3E.color,
        };
      } else if (value === 4) {
        return {
          asset: media.SFB4E.asset,
          name: media.SFB4E.title,
          color: media.SFB4E.color,
        };
      } else if (value === 5) {
        return {
          asset: media.SFB5E.asset,
          name: media.SFB5E.title,
          color: media.SFB5E.color,
        };
      } else {
        return "none";
      }
    };

    const accessoryC = () => {
      const value = chance.weighted([null, 1, 2, 3], [1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.SFC1E.asset,
          name: media.SFC1E.title,
          color: media.SFC1E.color,
        };
      } else if (value === 2) {
        return {
          asset: media.SFC2E.asset,
          name: media.SFC2E.title,
          color: media.SFC2E.color,
        };
      } else if (value === 3) {
        return {
          asset: media.SFC3E.asset,
          name: media.SFC3E.title,
          color: media.SFC3E.color,
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

export default whenUncommon;
