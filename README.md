# passwordManager
A Decentralized password manager that allows you to save password, only accesible to you and no one else.<br/>
NOTE: To use you have to create a table.What are tables?, to learn more: https://docs.tableland.xyz/javascript-sdk<br/>
All onchain activity is done on Polygon mumbai so its advisable to get maticon polygon mumbai, you can get it here: https://faucet.polygon.technology/<br/>
Note: you will only pay one and thats to create a table, the rest of the times you go gasless.
Tableland is used for decentralized sql database.<br/>
IPFS is used to store files and other data using web3.storage.<br/>
Lit protocol is used to encrypt stuff and set access control.<br/>
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
This is for the lit-protocol decentralized password manager bounty

To setup client ( frontend + backend ):

```bash
cd client/
npm install

#or

cd client/
yarn install

```

Errors
you might know meet this error: Uncaught (in promise) HTTPError: basic auth failure: invalid project id or project secret<br/>
This is because you need to add your own project id to the file auth: https://github.com/malik672/password-manager/blob/master/password-manager/api/auth.js<br/>
Go here to create a project id: https://www.infura.io/product/ipfs
