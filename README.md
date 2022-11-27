# Lit passwordManager
A Decentralized password manager secured by lit protocol that allows you to save password, only accesible to you and no one else.<br/>
NOTE: To use you have to create a table.What are tables?, to learn more: https://docs.tableland.xyz/javascript-sdk<br/>
All onchain activity is done on Polygon mumbai so its advisable to get matic on polygon mumbai.You can get it here: https://faucet.polygon.technology/<br/>
Note: you will only pay one and thats to create a table(a one time fee), the rest of the times you go gasless.
Tableland is used for decentralized sql database<br/>
<h3>What is Tableland<h3/>
 <p>The Tableland Network is a decentralized web3 protocol for structured relational data, starting with Ethereum (EVM) and EVM-compatible L2s. With Tableland, traditional web2 relational database capabilities are now possible by leveraging the blockchain layer for access control. But, Tableland isn't a new database—it’s just web3-native relational tables 🔥.<p/>
 <p>Now, in order to use Tableland, a table must first be created (i.e., minted on-chain as an ERC721). The deploying address is initially set as the table owner, and this owner gets to set the permissions for any other users that attempt to interact with the table in a mutating capacity. For example, the owner can set rules for who can update/insert/delete values, which data they can alter, or even decide if they’d like to transfer ownership of the table to another party.</p>
 <h3>why tableland</h3>
 1.It allows you ownership of your data,i.e with tableland you can transfer your data from one account to another<br/>
 2.solves the problem of immutability, with tableland you can now edit your data as you want<br/>
IPFS is used to store files and other data using web3.storage.<br/>
Lit protocol is used to encrypt files,strings,set access control and a lot of things.<br/>
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
 <h1>Rough Architecture</h1>
 <img src="https://lucid.app/publicSegments/view/2b31f4c2-665d-413d-92d7-76a611e70398/image.png"/>
</div>
Errors
you might know meet this error: Uncaught (in promise) HTTPError: basic auth failure: invalid project id or project secret<br/>
This is because you need to add your own project id to the file auth: https://github.com/malik672/password-manager/blob/master/password-manager/api/auth.js<br/>
Go here to create a project id: https://www.infura.io/product/ipfs
