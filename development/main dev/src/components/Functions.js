import axios from "axios";

export const currentUserTokens = async (account, contract) => {
  const userTokens = [];
  // console.log(typeof account === "string");
  // const owner = typeof account === "string" ? account : accounts[0];
  // console.log(Number(await getBalanceOf(owner, contract))); //until balance of owner for performance
  const currentTotalTokens = await totalSupply(contract);
  for (let i = 1; i <= currentTotalTokens.length; i++) {
    if (Number(await getOwnerOf(i, contract)) === Number(account)) {
      userTokens.push(await getTokenURI(i, contract));
    }
  }
  return userTokens;
};

export const mint = async (
  hash,
  metadata,
  jsonArray,
  contract,
  accounts,
  web3,
  removePinFromIPFS
) => {
  const amountEth = "0"; //# CHANGE TRANS AMOUNT
  const output = await contract.methods
    .mint(hash, metadata)
    .send({
      from: accounts[0],
      value: web3.utils.toWei(amountEth, "ether"),
    })
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
      return removePinFromIPFS(hash).then("successfully removed", hash);
    })
    .then(function (receipt) {
      console.log("sucessful");
      console.log(receipt);
      return jsonArray[0];
      // will be fired once the receipt is mined
    });
  return output;
};

export const getTokenURI = async (tokenId, contract) => {
  let output;
  await contract.methods
    .tokenURI(tokenId)
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

export const getOwnerOf = async (tokenId, contract) => {
  return await contract.methods.ownerOf(tokenId).call();
  // .then((res) => console.log(res));
};

export const getBalanceOf = async (owner, contract) => {
  return await contract.methods.balanceOf(owner).call();
  // .then((res) => console.log(res));
};

export const transferToken = async (recipient, contract, accounts) => {
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

export const totalSupply = async (contract) => {
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
