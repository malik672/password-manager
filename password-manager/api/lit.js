import LitJsSdk from "lit-js-sdk";
import { client as ipfs } from "./auth";

export const Lit = async (fie, walletAddress, files) => {
  const win = typeof window !== "undefined" ? window : "";
  const client = new LitJsSdk.LitNodeClient();
  await client.connect();
  let chain = "mumbai"

  const file = JSON.stringify({
    username:files,
    password:fie
  })

  win.litNodeClient = client;
  const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain: "mumbai" });
  const { encryptedString, symmetricKey } = await LitJsSdk.encryptString(file);

 

  const accessControlConditions = [
    {
      conditionType: "evmBasic",
      contractAddress: "",
      standardContractType: "",
      chain: "mumbai",
      method: "",
      parameters: [":userAddress"],
      returnValueTest: {
        comparator: "=",
        value: `${walletAddress}`,
      },
    },
  ];

  //save keys to node
  const encryptedSymmetricKey = await litNodeClient.saveEncryptionKey({
    accessControlConditions,
    symmetricKey,
    authSig,
    chain,
  });

  //save encrypted file to ipfs
  const addeds = await ipfs.add(encryptedString);;
  const uris = `https://lenspads.infura-ipfs.io/ipfs/${addeds.path}`;
  const encryptedSymmetricKeys = LitJsSdk.uint8arrayToString(encryptedSymmetricKey, "base16");

  const packagedData = {
    uris,
    encryptedSymmetricKeys,
    accessControlConditions,
  }
  
  //save encrypted file data to ipfs
  const added = await ipfs.add(JSON.stringify(packagedData));
  const uri = `https://lenspads.infura-ipfs.io/ipfs/${added.path}`;

  return uri;
};

//decrypt string
export async function decrypt(link) {  
  const client = new LitJsSdk.LitNodeClient();
  await client.connect();
  const wins = typeof  window !== "undefined" ? window : "";
  const win = typeof  wins.litNodeClient !== "undefined" ? window : "";
  //fetch file containing from ipfs 
  const reds = await fetch(link);
  const red = await reds.json();
 
  const chain = 'mumbai';

  const authSig = await LitJsSdk.checkAndSignAuthMessage({chain});

 //get accessControlConditions from file
  const accessControlConditions = red.accessControlConditions;

  const links = red.uris;
  const blues = await fetch(links);
  const r = red.encryptedSymmetricKeys;

  const bluee = await blues.blob();

  //get encryption keys
  const symmetricKey = await client.getEncryptionKey({
    accessControlConditions,
    toDecrypt: r,
    chain,
    authSig,
  });

  //decrypt files and get username and password
  const decryptString = await LitJsSdk.decryptString(
    bluee,
    symmetricKey
  );
  //returb decrypted string
  return decryptString;
}