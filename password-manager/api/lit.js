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

  const encryptedSymmetricKey = await litNodeClient.saveEncryptionKey({
    accessControlConditions,
    symmetricKey,
    authSig,
    chain,
  });

  const addeds = await ipfs.add(encryptedString);;
  const uris = `https://lenspads.infura-ipfs.io/ipfs/${addeds.path}`;
  const encryptedSymmetricKeys = LitJsSdk.uint8arrayToString(encryptedSymmetricKey, "base16");

  const packagedData = {
    uris,
    encryptedSymmetricKeys,
    accessControlConditions,
  }

  const added = await ipfs.add(JSON.stringify(packagedData));
  const uri = `https://lenspads.infura-ipfs.io/ipfs/${added.path}`;

  return uri;
};


export async function decrypt(link) {  
  const client = new LitJsSdk.LitNodeClient();
  await client.connect();
  console.log(client)
  const wins = typeof  window !== "undefined" ? window : "";
  const win = typeof  wins.litNodeClient !== "undefined" ? window : "";
  console.log(win)
  const reds = await fetch(link);
  const red = await reds.json();
  console.log(red)

  const chain = 'mumbai';

  const authSig = await LitJsSdk.checkAndSignAuthMessage({chain});

  const accessControlConditions = red.accessControlConditions;

  const links = red.uris;
  const blues = await fetch(links);
  const r = red.encryptedSymmetricKeys;

  const bluee = await blues.blob();

  const symmetricKey = await client.getEncryptionKey({
    accessControlConditions,
    toDecrypt: r,
    chain,
    authSig,
  });

  const decryptString = await LitJsSdk.decryptString(
    bluee,
    symmetricKey
  );

  console.log(decryptString)
  return decryptString;
}