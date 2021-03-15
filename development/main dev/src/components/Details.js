import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";

const Details = ({ contract, axios }) => {
  const [data, setData] = useState();
  let { tokenId } = useParams();

  const getTokenURI = useCallback(async () => {
    let output;
    await contract;
    if (contract !== null) {
      console.log(contract);
      await contract.methods
        .getTokenURI(Number(tokenId))
        .call()
        .then(async (data) => {
          const url = data;
          const tokenURIData = await axios.get(url, {
            maxContentLength: "Infinity",
            headers: {
              "Content-Type": "application/json",
            },
          });
          output = tokenURIData.data;
        });
    }
    setData(output);
    return output;
  }, [axios, contract, tokenId]);
  useEffect(() => {
    getTokenURI();
  }, [contract, getTokenURI]);

  if (data !== undefined) {
    console.log(data);
  }
  //# DO ACCESSORIES
  return (
    <div>
      <center>
        {data !== undefined ? (
          <>
            <img src={data[0]} alt={data[0]} />
            <h2>Main</h2>
            <p>issue: {data[1].currentFish.issue}</p>
            <p>name: {data[1].currentFish.name}</p>
            <p>rarity: {data[1].currentFish.rarity}</p>
            <p>
              date minted: {data[1].currentFish.date.day} @{" "}
              {data[1].currentFish.date.time}
            </p>
            <h2>Base</h2>
            <p>
              base - colorTrait: {data[1].currentFish.base.colorTrait},
              hexTrait: {data[1].currentFish.base.hexTrait}, variant:{" "}
              {data[1].currentFish.base.variant},
            </p>
            <h2>Accessories</h2>
            <h4>Accessory A</h4>
            {data[1].currentFish.accessories.accessoryA === "none" ? (
              <p>none</p>
            ) : (
              <>
                <p>
                  {data[1].currentFish.accessories.accessoryA.color} -{" "}
                  {data[1].currentFish.accessories.accessoryA.name}
                </p>
                {/* <img
                  src={data[1].currentFish.accessories.accessoryA.asset}
                  alt={data[1].currentFish.accessories.accessoryA.asset}
                /> */}
              </>
            )}
            <h4>Accessory B</h4>
            {data[1].currentFish.accessories.accessoryB === "none" ? (
              <p>none</p>
            ) : (
              <>
                <p>
                  {data[1].currentFish.accessories.accessoryB.color} -{" "}
                  {data[1].currentFish.accessories.accessoryB.name}
                </p>
                {/* <img
                  src={data[1].currentFish.accessories.accessoryB.asset}
                  alt={data[1].currentFish.accessories.accessoryB.asset}
                /> */}
              </>
            )}
            <h4>Accessory C</h4>
            {data[1].currentFish.accessories.accessoryC === "none" ? (
              <p>none</p>
            ) : (
              <>
                <p>
                  {data[1].currentFish.accessories.accessoryC.color} -{" "}
                  {data[1].currentFish.accessories.accessoryC.name}
                </p>
                {/* <img
                  src={data[1].currentFish.accessories.accessoryC.asset}
                  alt={data[1].currentFish.accessories.accessoryC.asset}
                /> */}
              </>
            )}
            <h4>Accessory D</h4>
            {data[1].currentFish.accessories.accessoryD === "none" ? (
              <p>none</p>
            ) : (
              <>
                <p>
                  {data[1].currentFish.accessories.accessoryD.color} -
                  {data[1].currentFish.accessories.accessoryD.name}
                </p>
                {/* <img
                  src={data[1].currentFish.accessories.accessoryD.asset}
                  alt={data[1].currentFish.accessories.accessoryD.asset}
                /> */}
              </>
            )}
          </>
        ) : (
          <h1>loading or doesn't exist</h1>
        )}
        <a className="navlink" href="/">
          home
        </a>
      </center>
    </div>
  );
};

export default Details;
