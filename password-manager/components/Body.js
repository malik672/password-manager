import React from "react";
import styles from "../styles/Home.module.css";
import { red, tables, deletes, check } from "../api/tableland";
import { Lit, decrypt } from "../api/lit";
import { ethers, providers } from "ethers";
import { useState, useEffect } from "react";

const Body = () => {
  const [state, setState] = useState([]);
  const [val, setVal] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [namel, setNamel] = useState("");
  const [addres, setUserAddress] = useState("");


  async function removal(err) {
    console.log(err);
    await deletes(err);
  }

  useEffect(() => {
    async function err() {
      const { rows, columns } = await tables();
      setState(rows);
    }
    const checkConnection = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const addresses = await provider.listAccounts();
      if (addresses.length) {
        err();
        setUserAddress(addresses[0]);
      } else {
        ""
      }
    };
    checkConnection();
  }, [state]);

  async function adds(e) {
    const win = typeof window !== 'undefined' ? window : "";
    e.preventDefault();
    const rede = await Lit(
      pass,
      win.ethereum.selectedAddress,
      user
    );
    await red(val, rede);
    document.querySelector("#form").reset();
  }

  async function dear(a, b) {
    console.log((b.target.value = a));
  }
  async function show(b, e) {
    const red = await decrypt(b);
    const show = document.querySelector(".tear");
    const obj = JSON.parse(red);
    console.log(obj.username)
    setName(obj.username)
    setNamel(obj.password)
    show.style.display = "flex";
    // console.log(e);
  }

  const Hider = () => {
    const show = document.querySelector(".tear");
    show.style.display = "none";
  } 
  return (
    <div className style={{ paddingTop: "105px" }}>
      <div>
        <div
          className="flex header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        ></div>
        <div>
          <div
            className="open"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <form
              id="form"
              style={{
                display: "flex",
                marginLeft: "20px",
                alignItems: "center",
              }}
              onSubmit={adds}
            >
              <div style={{ marginRight: "20px" }}>
                <label>label for password</label>
                <input type="text" onChange={(e) => setVal(e.target.value)} />
              </div>
              <div>
                <label>Username</label>
                <input type="text" onChange={(e) => setUser(e.target.value)} />
              </div>
              <div>
                <label>Password</label>
                <input
                  type="password"
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <button
                type="submit"
                style={{
                  padding: "4px",
                  width: "100px",
                  color: "white",
                  backgroundColor: "green",
                  border: "0",
                  borderRadius: "8px",
                  cursor: "pointer",
                  marginRight: "65px",
                }}
              >
                Add
              </button>
            </form>
          </div>
          <div style={{}}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid black",
                padding: "20px",
                marginTop: "10px",
              }}
            >
              <h1>Site</h1>
              <h1>password</h1>
            </div>
            {state.map((a) => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid black",
                  padding: "20px",
                  marginTop: "10px",
                }}
              >
                <label key="">{a[0]}</label>
                <div className="rems">
                  <button
                    style={{
                      cursor: "pointer",
                      width: "80px",
                      padding: "8px",
                      color: "white",
                      backgroundColor: "red",
                      border: "0",
                      borderRadius: "8px",
                      marginRight: "12px",
                    }}
                    onClick={() => removal(a[0])}
                    className="remo"
                  >
                    Remove
                  </button>
                  <button
                    style={{
                      cursor: "pointer",
                      width: "80px",
                      padding: "8px",
                      color: "white",
                      backgroundColor: "blue",
                      border: "0",
                      borderRadius: "8px",
                    }}
                    className="sh"
                    onClick={(e) => show(a[1], e)}
                  >
                    show
                  </button>
                </div>
                <div className="tear" style={{display:"none", alignItems:"center", justifyContent:"center"}}>
                  {/* <input
                    type="password"
                    style={{ border: "0px" }}
                    readOnly
                    onClick={(e) => dear(a[1], e)}
                  ></input> */}
                  <label>Username :</label>
                  <p style={{marginLeft:"6px", marginRight:"8px"}}>{name}</p>
                  <label>Password :</label>
                  <p style={{marginLeft:"6px", marginRight:"8px"}}>{namel}</p>
                  <button  style={{
                      cursor: "pointer",
                      width: "80px",
                      padding: "8px",
                      color: "white",
                      backgroundColor: "black",
                      border: "0",
                      borderRadius: "8px",
                    }} onClick={(e) => Hider(e)}>Hide</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
