import React, { useCallback, useEffect, useState } from "react";
import whenCommon from "./components/WhenRarity/WhenCommon";
import whenUncommon from "./components/WhenRarity/WhenUncommon";
import whenRare from "./components/WhenRarity/WhenRare";
import whenEpic from "./components/WhenRarity/WhenEpic";
import whenLegendary from "./components/WhenRarity/WhenLegendary";
import _ from "underscore";
import "./App.css";
import mergeImages from "merge-images";
import { Canvas, Image } from "canvas";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";
import Details from "./components/Details";
import UserProfile from "./components/UserProfile";
import { loadWeb3, loadBlockchainData } from "./components/InitWeb3";
import { currentUserTokens, mint, totalSupply } from "./components/Functions";
const chance = require("chance").Chance();

const App = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [totalTokens, setTotalTokens] = useState([]);
  const [recipient, setRecipient] = useState("");
  const [currentFish, setCurrentFish] = useState("");
  const [accountLink, setAccountLink] = useState("");

  /* ------------------------------- PUT IN ENV ------------------------------- */
  const pinata_api_key = "94400bd517a6e2878d33";
  const pinata_secret_api_key =
    "261626edb4e2063cb7b7c9cf044b8f4b0ee9f79d8d5a2fb73e06c59038dcadc3";

  const removePinFromIPFS = useCallback(async (hash) => {
    console.log(hash);
    const url = `https://api.pinata.cloud/pinning/unpin/${hash}`;
    return await axios
      .delete(url, {
        headers: {
          pinata_api_key,
          pinata_secret_api_key,
        },
      })
      .then(function (response) {
        console.log("good", response);
      })
      .catch(function (error) {
        console.log("bad", error);
      });
  }, []);

  const pinJSONtoIPFS = useCallback(
    async (fishData) => {
      const jsonArray = [];
      const inputImage = () => {
        const imageArray = [fishData.currentFish.base.asset];
        if (fishData.currentFish.accessories.accessoryA !== "none") {
          if (fishData.currentFish.accessories.accessoryA.asset !== "none") {
            imageArray.push(fishData.currentFish.accessories.accessoryA.asset);
          }
        }
        if (fishData.currentFish.accessories.accessoryB !== "none") {
          if (fishData.currentFish.accessories.accessoryB.asset !== "none") {
            imageArray.push(fishData.currentFish.accessories.accessoryB.asset);
          }
        }
        if (fishData.currentFish.accessories.accessoryC !== "none") {
          if (fishData.currentFish.accessories.accessoryC.asset !== "none") {
            imageArray.push(fishData.currentFish.accessories.accessoryC.asset);
          }
        }
        if (fishData.currentFish.accessories.accessoryD !== "none") {
          if (fishData.currentFish.accessories.accessoryD.asset !== "none") {
            imageArray.push(fishData.currentFish.accessories.accessoryD.asset);
            console.log("pushed");
          }
        }
        return imageArray;
      };
      console.log(inputImage());
      await mergeImages(inputImage(), {
        Canvas: Canvas,
        Image: Image,
      }).then((currentFish) => {
        // console.log(currentFish);
        jsonArray.push(currentFish, fishData);
        console.log(jsonArray);
      });

      const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
      // let fishData = fishData;
      const data = JSON.stringify(jsonArray);
      // let data = JSON.parse(data1);
      console.log(jsonArray[1].currentFish.name);
      const res = await axios.post(url, data, {
        maxContentLength: "Infinity",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
          "Content-Type": "application/json",
          pinata_api_key,
          pinata_secret_api_key,
        },
      });
      const hash = res.data.IpfsHash;
      const metadata = `https://gateway.pinata.cloud/ipfs/${hash}`;
      console.log(hash);
      console.log(metadata);
      //# the fuck?
      const mintRes = await mint(
        hash,
        metadata,
        jsonArray,
        contract,
        accounts,
        web3,
        removePinFromIPFS
      );
      console.log(mintRes);
      console.log(typeof mintRes === "string");
      if (typeof mintRes === "string") {
        console.log("good");
        setCurrentFish(mintRes);
      }
    },
    [accounts, contract, web3, removePinFromIPFS]
  );

  const whatRarity = useCallback(
    async (rarity) => {
      const totalTokens = Number(await contract.methods.totalSupply().call());
      console.log(totalTokens);
      if (rarity === "Common") {
        pinJSONtoIPFS(whenCommon(totalTokens));
      } else if (rarity === "Uncommon") {
        pinJSONtoIPFS(whenUncommon(totalTokens));
      } else if (rarity === "Rare") {
        pinJSONtoIPFS(whenRare(totalTokens));
      } else if (rarity === "Epic") {
        pinJSONtoIPFS(whenEpic(totalTokens));
      } else if (rarity === "Legendary") {
        pinJSONtoIPFS(whenLegendary(totalTokens));
      }
    },
    [pinJSONtoIPFS, contract]
  );
  const generateRarity = useCallback(() => {
    const rarity = chance.weighted(
      ["Legendary", "Epic", "Rare", "Uncommon", "Common"],
      [0.5, 1, 6, 8, 10]
    );
    console.log(rarity);
    whatRarity(rarity);
  }, [whatRarity]);
  const generate = useCallback(() => {
    generateRarity();
  }, [generateRarity]);

  useEffect(() => {
    loadWeb3();
    loadBlockchainData().then((res) => {
      setWeb3(res.web3);
      setAccount(res.accounts);
      setAccountLink(res.accounts[0]);
      setContract(res.contract);
      totalSupply(res.contract).then((totalSupply) =>
        setTotalTokens(totalSupply)
      );
    });
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/details/:tokenId">
          <Details contract={contract} axios={axios} />
        </Route>
        <Route path="/aquarist/:account">
          <UserProfile
            accounts={accounts}
            currentUserTokens={currentUserTokens}
            chance={chance}
            _={_}
            contract={contract}
          />
        </Route>
        <div>
          {!web3 ? (
            <div>Loading Web3, accounts, and contract...</div>
          ) : (
            <div>
              <img src={currentFish} alt="currentFish" />
              <button onClick={generate}>generate</button>
              <p>{accounts}</p>
              <p>totalSupply - {totalTokens}</p>
              <label>From YOU ({accounts}) to </label>
              <input
                placeholder="recipient address"
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
              />
              {/* <button onClick={transferToken(recipient, contract, accounts)}>transferToken</button> */}

              <br />
              <br />
              <a href={`/aquarist/${accountLink}`}>Your Profile</a>
            </div>
          )}
        </div>
      </Switch>
    </div>
  );
};

export default App;
