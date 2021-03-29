const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");
exports.handler = async function (event, context) {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
  const pinata_api_key = "94400bd517a6e2878d33";
  const pinata_secret_api_key =
    "261626edb4e2063cb7b7c9cf044b8f4b0ee9f79d8d5a2fb73e06c59038dcadc3";
  let location = event.queryStringParameters.location;
  let tokenId = event.queryStringParameters.tokenId;
  console.log(location);
  console.log(tokenId);
  let data = new FormData();
  data.append(`${tokenId}`, location); //# goes to local?

  const uploadToIPFS = await axios.post(url, data, {
    maxBodyLength: "Infinity", //this is needed to prevent axios from erroring out with large files
    headers: {
      "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
      pinata_api_key,
      pinata_secret_api_key,
    },
  });
  // .then(fs.unlinkSync(location));

  return {
    statusCode: 200,
    body: JSON.stringify({
      image: `https://gateway.pinata.cloud/ipfs/${uploadToIPFS.data.IpfsHash}`,
    }),
  };
};
