import { connect } from "@tableland/sdk";

export async function required() {
  const tableland = await connect({
    network: "testnet",
    chain: "polygon-mumbai",
  });
  const tables = await tableland.list(); // returns an Object with the Tables the connected address owns
  const myMatchingTables = Object.values(tables).filter(
    (table) => table.name.slice(0, 16) === "passwordManagers"
  ); // filters `tables` for matching `structure`s
  if (myMatchingTables.length === 0) {
    const { name } = await tableland.create(
      `id text, name text, primary key (id)`, // Table schema definition
      {
        prefix: `passwordManagers`, // Optional `prefix` used to define a human-readable string
      }
    );
  } else {
    alert("user has a table")
  }
}

export async function check() {
  let fed = "";
  const tableland = await connect({
    network: "testnet",
    chain: "polygon-mumbai",
  });
  // const hashRes =  await tableland.hash('name text, id int, primary key (id)', 'my_sdk_table');
  const tables = await tableland.list(); // returns an Object with the Tables the connected address owns
  const myMatchingTables = Object.values(tables).filter(
    (table) => table.name.slice(0, 16) === "passwordManagers"
  ); // filters `tables` for matching `structure`s
  if (myMatchingTables.length === 0) {
    const { name } = await tableland.create(
      `id text, name text, primary key (id)`, // Table schema definition
      {
        prefix: `passwordManagers`, // Optional `prefix` used to define a human-readable string
      }
    );
  } else {
    return myMatchingTables[0].name;
  }
}

// Establish a connection
const blue = async () => {
  const tableland = await connect({
    network: "testnet",
    chain: "polygon-mumbai",
  });

  return tableland;
};

// // Create a table
// const { name } = await tableland.create(
//   `id integer, name text, primary key (id)`, // Table schema definition
//   {
//     prefix: `password_manager`, // Optional `prefix` used to define a human-readable string
//   }
// );

export const red = async (site, password) => {
  console.log(site, password);

  const name = await check();
  const tableland = await connect({
    network: "testnet",
    chain: "polygon-mumbai",
  });

  const JSEN = JSON.stringify("");

  const insertRes = await tableland.write(
    `INSERT INTO ${name} (id, name) VALUES ('${site}', '${password}');`
  );
  const tables = await tableland.list();
  console.log(tables);
};

export const deletes = async (remove) => {
  const name = await check();

  const tableland = await connect({
    network: "testnet",
    chain: "polygon-mumbai",
  });

  const removeRes = await tableland.write(
    `DELETE FROM ${name} WHERE id = '${remove}';`
  );
  console.log(removeRes);
};

export const tables = async () => {
  const name = await check();

  const tableland = await connect({
    network: "testnet",
    chain: "polygon-mumbai",
  });

  const readRes = await tableland.read(`SELECT * FROM ${name};`);
  return readRes;
};
