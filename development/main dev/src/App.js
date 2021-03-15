import React, { useCallback, useEffect, useState } from "react";
import whenCommon from "./components/WhenRarity/WhenCommon";
import whenUncommon from "./components/WhenRarity/WhenUncommon";
import whenRare from "./components/WhenRarity/WhenRare";
import whenEpic from "./components/WhenRarity/WhenEpic";
import whenLegendary from "./components/WhenRarity/WhenLegendary";
import _ from "underscore";
import GenerateFish from "./contracts/GenerateFish.json";
import "./App.css";
import mergeImages from "merge-images";
import { Canvas, Image } from "canvas";
import Web3 from "web3";
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";
import Details from "./components/Details";
const chance = require("chance").Chance();
const App = () => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [totalTokens, setTotalTokens] = useState([]);
  const [recipient, setRecipient] = useState("");
  const [userTokens, setUserTokens] = useState([]);
  const [userTokensUpdated, setUserTokensUpdated] = useState(false);
  const [currentFish, setCurrentFish] = useState("");

  //PUT IN ENV
  const pinata_api_key = "94400bd517a6e2878d33";
  const pinata_secret_api_key =
    "261626edb4e2063cb7b7c9cf044b8f4b0ee9f79d8d5a2fb73e06c59038dcadc3";
  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
    } else if (window.web3) {
      window.web3 = new Web3(window.ethereum);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask"
      );
    }
  }
  async function loadBlockchainData() {
    const web3 = window.web3;
    const ethereum = window.ethereum;
    setWeb3(web3);
    // Load account
    const accounts = await ethereum.request({ method: "eth_accounts" });
    setAccount(accounts);
    // setAccount(accounts[0]);

    const networkId = await web3.eth.net.getId();
    const networkData = GenerateFish.networks[networkId];
    // const totalSupply = await contract.methods.totalSupply().call(); //# Console log balanceOf
    if (networkData) {
      const abi = GenerateFish.abi;
      const address = networkData.address;
      const contract = new web3.eth.Contract(abi, address);
      setTotalTokens(await totalSupply(contract));
      setContract(contract);
    } else {
      window.alert("Smart contract not deployed to detected network.");
    }
  }

  const totalSupply = async (contract) => {
    const totalSupply = await contract.methods.totalSupply().call();
    const totalTokens = [];
    for (let i = 1; i <= totalSupply; i++) {
      await contract.methods
        .tokens(i - 1)
        .call()
        .then((token) => totalTokens.push(Number(token)));
      // setTotalTokens((currentTokens) => [tokens, ...currentTokens]);
    }
    return totalTokens;
  };

  const currentUserTokens = async () => {
    const currentTotalTokens = await totalSupply(contract);
    // const owner = accounts[0];
    // console.log(Number(await getBalanceOf(owner))); //until balance of owner for performance
    for (let i = 1; i <= currentTotalTokens.length; i++) {
      if (Number(await getOwnerOf(i)) === Number(await accounts[0])) {
        userTokens.push(await getTokenURI(i));
      }
    }
    setUserTokens(userTokens);
    setUserTokensUpdated(true);
  };

  const getTokenURI = async (tokenId) => {
    let output;
    await contract.methods
      .getTokenURI(tokenId)
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
    return output;
  };

  const transferToken = async () => {
    const to = recipient;
    const tokenId = 2;
    console.log(to, tokenId);
    if (tokenId === undefined) {
      console.error("tokenId is undefined");
    } else {
      await contract.methods
        .transferToken(to, tokenId)
        .send({ from: accounts[0] });
    }
  };

  const getBalanceOf = async (owner) => {
    return await contract.methods.balanceOf(owner).call();
    // .then((res) => console.log(res));
  };

  const getOwnerOf = async (i) => {
    const tokenId = Number(i);
    return Number(await contract.methods.getOwnerOf(tokenId).call());
    // .then((res) => console.log(res));
  };

  const mint = useCallback(
    async (hash, metadata, jsonArray) => {
      await contract.methods
        .mint(hash, metadata)
        .send({ from: accounts[0] })
        .once("transactionHash", function (hash) {
          console.log(hash);
        })

        .on("confirmation", function (confNumber, receipt) {
          console.log(confNumber);
          console.log(receipt);
          console.log("what is this");
        })
        .on("error", function (error) {
          console.log(error);
          console.log(hash);
          removePinFromIPFS(hash).then("successfully removed", hash);
        })
        .then(function (receipt) {
          setCurrentFish(jsonArray[0]);
          console.log("sucessful");
          console.log(receipt);
          // will be fired once the receipt is mined
        });
    },
    [accounts, contract]
  );

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
      mint(hash, metadata, jsonArray);
    },
    [mint]
  );

  const removePinFromIPFS = async (hash) => {
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
  };

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
    loadBlockchainData();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/details/:tokenId">
          <Details contract={contract} axios={axios} />
        </Route>
        <div>
          {!web3 ? (
            <div>Loading Web3, accounts, and contract...</div>
          ) : (
            <div>
              <img src={currentFish} alt="currentFish" />
              <button onClick={generate}>generate</button>
              <button onClick={currentUserTokens}>currentusertokens</button>
              <p>{accounts}</p>
              <p>totalSupply - {totalTokens}</p>
            </div>
          )}
          <label>From YOU ({accounts}) to </label>
          <input
            placeholder="recipient address"
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
          <button onClick={transferToken}>transferToken</button>

          <p>
            Your tokens ({accounts}): {userTokens}
          </p>
          {userTokensUpdated ? (
            _.map(userTokens, (tokens, key) => {
              return (
                <React.Fragment key={chance.integer()}>
                  <Link to={`/details/${tokens[1].currentFish.issue}`}>
                    <img key={tokens[0]} src={tokens[0]} alt="" />
                  </Link>
                </React.Fragment>
              );
            })
          ) : (
            <h1>false</h1>
          )}
        </div>
      </Switch>
    </div>
  );
};

export default App;
