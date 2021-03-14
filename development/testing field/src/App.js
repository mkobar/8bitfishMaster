import React from "react";

const App = () => {
  
  const fishName = (number) => {
    if (number === 1) {
      console.log("clownFish");
      return "clownFish";
    } else {
      console.log("goldfish");
      return "goldfish";
    }
  };

  const whenCommon = () => {
    const number = 2;

    const fishBase = "red clownfish";
    const accessoryATitle = "scarf";
    const accessoryBTitle = "drum";
    return {
      currentFish: {
        fishBase: fishBase,
        fishName: fishName(number),
        accessories: {
          accessoryA: {
            name: accessoryATitle,
          },
          accessoryB: {
            name: accessoryBTitle,
          },
        },
      },
    };
  };

  return (
    <div>
      <button onClick={whenCommon}>go</button>
      <button onClick={() => console.log(whenCommon())}>console</button>
    </div>
  );
};

export default App;
