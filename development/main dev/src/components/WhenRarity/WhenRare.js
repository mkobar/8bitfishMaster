import * as media from "../Assets";
import moment from "moment";
const chance = require("chance").Chance();

const whenRare = (totalTokens) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  console.log("I am rare");
  const issue = totalTokens + 1;
  const rarity = "uncommon";
  const day = moment().format("MM-DD-YY");
  const time = moment().format("hh:mm:ss");
  const choices = ["whale", "wide fish"];
  const whichFish = choices[getRandomInt(2)];
  if (whichFish === "whale") {
    console.log("I am a whale");
    const fishBase = () => {
      const value = chance.weighted([1, 2, 3, 4, 5], [1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.W1E.asset,
          colorTrait: media.W1E.color,
          variant: media.W1E.var,
          hexTrait: media.W1E.hex,
        };
      } else if (value === 2) {
        return {
          asset: media.W2E.asset,
          colorTrait: media.W2E.color,
          variant: media.W2E.var,
          hexTrait: media.W2E.hex,
        };
      } else if (value === 3) {
        return {
          asset: media.W3E.asset,
          colorTrait: media.W3E.color,
          variant: media.W3E.var,
          hexTrait: media.W3E.hex,
        };
      } else if (value === 4) {
        return {
          asset: media.W4E.asset,
          colorTrait: media.W4E.color,
          variant: media.W4E.var,
          hexTrait: media.W4E.hex,
        };
      } else if (value === 5) {
        return {
          asset: media.W5E.asset,
          colorTrait: media.W5E.color,
          variant: media.W5E.var,
          hexTrait: media.W5E.hex,
        };
      }
    };

    const accessoryA = () => {
      const value = chance.weighted([null, 1, 2, 3, 4, 5], [1, 1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.WA1E.asset,
          name: media.WA1E.title,
          color: media.WA1E.color,
        };
      } else if (value === 2) {
        return {
          asset: media.WA2E.asset,
          name: media.WA2E.title,
          color: media.WA2E.color,
        };
      } else if (value === 3) {
        return {
          asset: media.WA3E.asset,
          name: media.WA3E.title,
          color: media.WA3E.color,
        };
      } else if (value === 4) {
        return {
          asset: media.WA4E.asset,
          name: media.WA4E.title,
          color: media.WA4E.color,
        };
      } else if (value === 5) {
        return {
          asset: media.WA5E.asset,
          name: media.WA5E.title,
          color: media.WA5E.color,
        };
      } else {
        return "none";
      }
    };

    const accessoryB = () => {
      const value = chance.weighted([null, 1, 2, 3, 4], [1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.WB1E.asset,
          name: media.WB1E.title,
          color: media.WB1E.color,
        };
      } else if (value === 2) {
        return {
          asset: media.WB2E.asset,
          name: media.WB2E.title,
          color: media.WB2E.color,
        };
      } else if (value === 3) {
        return {
          asset: media.WB3E.asset,
          name: media.WB3E.title,
          color: media.WB3E.color,
        };
      } else if (value === 4) {
        return {
          asset: media.WB4E.asset,
          name: media.WB4E.title,
          color: media.WB4E.color,
        };
      } else {
        return "none";
      }
    };

    const accessoryC = () => {
      const value = chance.weighted([null, 1, 2, 3, 4, 5], [1, 1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.WC1E.asset,
          name: media.WC1E.title,
          color: media.WC1E.color,
        };
      } else if (value === 2) {
        return {
          asset: media.WC2E.asset,
          name: media.WC2E.title,
          color: media.WC2E.color,
        };
      } else if (value === 3) {
        return {
          asset: media.WC3E.asset,
          name: media.WC3E.title,
          color: media.WC3E.color,
        };
      } else if (value === 4) {
        return {
          asset: media.WC4E.asset,
          name: media.WC4E.title,
          color: media.WC4E.color,
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
    console.log("I am wide fish");

    const fishBase = () => {
      const value = chance.weighted([1, 2, 3, 4, 5], [1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.WF1E.asset,
          colorTrait: media.WF1E.color,
          variant: media.WF1E.var,
          hexTrait: media.WF1E.hex,
        };
      } else if (value === 2) {
        return {
          asset: media.WF2E.asset,
          colorTrait: media.WF2E.color,
          variant: media.WF2E.var,
          hexTrait: media.WF2E.hex,
        };
      } else if (value === 3) {
        return {
          asset: media.WF3E.asset,
          colorTrait: media.WF3E.color,
          variant: media.WF3E.var,
          hexTrait: media.WF3E.hex,
        };
      } else if (value === 4) {
        return {
          asset: media.WF4E.asset,
          colorTrait: media.WF4E.color,
          variant: media.WF4E.var,
          hexTrait: media.WF4E.hex,
        };
      } else if (value === 5) {
        return {
          asset: media.WF5E.asset,
          colorTrait: media.WF5E.color,
          variant: media.WF5E.var,
          hexTrait: media.WF5E.hex,
        };
      }
    };

    const accessoryA = () => {
      const value = chance.weighted([null, 1, 2, 3, 4, 5], [1, 1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.WFA1E.asset,
          name: media.WFA1E.title,
          color: media.WFA1E.color,
        };
      } else if (value === 2) {
        return {
          asset: media.WFA2E.asset,
          name: media.WFA2E.title,
          color: media.WFA2E.color,
        };
      } else if (value === 3) {
        return {
          asset: media.WFA3E.asset,
          name: media.WFA3E.title,
          color: media.WFA3E.color,
        };
      } else if (value === 4) {
        return {
          asset: media.WFA4E.asset,
          name: media.WFA4E.title,
          color: media.WFA4E.color,
        };
      } else if (value === 5) {
        return {
          asset: media.WFA5E.asset,
          name: media.WFA5E.title,
          color: media.WFA5E.color,
        };
      } else {
        return "none";
      }
    };

    const accessoryB = () => {
      const value = chance.weighted([null, 1, 2, 3, 4, 5], [1, 1, 1, 1, 1, 1]);
      if (value === 1) {
        return {
          asset: media.WFB1E.asset,
          name: media.WFB1E.title,
          color: media.WFB1E.color,
        };
      } else if (value === 2) {
        return {
          asset: media.WFB2E.asset,
          name: media.WFB2E.title,
          color: media.WFB2E.color,
        };
      } else if (value === 3) {
        return {
          asset: media.WFB3E.asset,
          name: media.WFB3E.title,
          color: media.WFB3E.color,
        };
      } else if (value === 4) {
        return {
          asset: media.WFB4E.asset,
          name: media.WFB4E.title,
          color: media.WFB4E.color,
        };
      } else if (value === 5) {
        return {
          asset: media.WFB5E.asset,
          name: media.WFB5E.title,
          color: media.WFB5E.color,
        };
      } else {
        return "none";
      }
    };

    const accessoryC = () => {
      const value = chance.weighted([null, 1], [1, 1]);
      if (value === 1) {
        return {
          asset: media.WFC1E.asset,
          name: media.WFC1E.title,
          color: media.WFC1E.color,
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

export default whenRare;
