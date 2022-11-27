# Lit Password Manager

A Decentralized password manager secured by lit protocol that allows you to save password, only accessible to you and no one else

## What is lit protocol
from the docs: Lit Protocol is a decentralized key management network powered by threshold cryptography. A blockchain-agnostic middleware layer, Lit can be used to read and write data between blockchains and off-chain platforms, facilitating encryption, access control, and automation for the open web via programmatic signing.

NOTE: To use you have to create a table.What are tables?, to learn more: https://docs.tableland.xyz/javascript-sdk , Why Tableland ? 
- It allows you ownership of your data,i.e with tableland you can transfer your data(since tables are erc-721 tokens) from one account to another
- solves the problem of immutability, with tableland you can now delete your data as you want
- you can control your data anytime you want both from the ui(frontend) and the smart contract
- gassless , all writing, deleting are gasless, no one will ever - want to pay for gas everytime they simply had to change passwords, delete password or something,even signing transactions is  a pain in the ass now imagine gas fees. They would simply stick to web2
- can you ever imagine if your wallet were to hacked into, you can simply transfer the table nft to another contract, but you are thinking what if the hacker simply transfer the nft to another address he controls, but don't forget only the creator of the table can control the table and also set access to it, besides you can just burn the table nft

All onchain activity is done on Polygon mumbai so its advisable to get matic on polygon mumbai.You can get it here: https://faucet.polygon.technology/ 

Note: you will only pay one and that's to create a table(a one time fee), the rest of the times you go gas less.

<table>
<thead>
<tr>
<th>Tech stack used</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://polygon.technology/">Polygon</a></td>
</tr>
<tr>
<td><a href="https://developer.litprotocol.com/">Lit-Protocol</a></td>
</tr>
<tr>
<td><a href="https://ipfs.tech/">Ipfs</a></td>
</tr>
<tr>
<td><a href="https://docs.tableland.xyz/">Tableland</a></td>
</tr>
</tbody>
</table><br/>
<div>


## Rough Architecture of the Lit Password manager
<img src ="https://lucid.app/publicSegments/view/2b31f4c2-665d-413d-92d7-76a611e70398/image.png"/>

## How it's built
Based on the architecture user details are encrypted and the details you get from the encryption which are the encrypted string and symmetric key are then
```
const { encryptedString, symmetricKey } = await LitJsSdk.encryptString(file);
```
locked behind some set of access control conditions this condition are based on the user address i.e only the person that set the condition can decrypt it, this restricts user details to one account, but since passwords are very risky details it's only fitting to restrict access to a single user account

```
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
  ];Key error

  //save keys to node
const encryptedSymmetricKey = await               litNodeClient.saveEncryptionKey({
    accessControlConditions,
    symmetricKey,
    authSig,
    chain,
  });
```
user encrypted files are stored on ipfs and the hash we get from the ipfs file are stored inside of the Tableland, basically all tableland does is that it holds the ipfs hash to a key to value pairing i.e(key: look, value:ipfshash), the password is never decrypted until the user asks of them, basically your password is secured all the time(unless you share someone your private keys)

## Errors
## Project Key
if you were to clone the repository might know meet this error: Uncaught (in promise) HTTPError: basic auth failure: invalid project id or project secret<br/>
This is because you need to add your own project id to the file auth: https://github.com/malik672/password-manager/blob/master/password-manager/api/auth.js , or create an env file and add your details in it<br/>
Go here to create a project id: https://www.infura.io/product/ipfs<br/>

## Key error(Tableland)
two details or credentials can't have the same key
