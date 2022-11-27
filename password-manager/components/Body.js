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
  const [inputs, setInputs] = useState("");
  const [filterItems, setFilterItems] = useState([]);
  const [namel, setNamel] = useState("");
  const [addres, setUserAddress] = useState("");

  //remove from the array
  async function removal(err) {
    console.log(err);
    await deletes(err);
  }

  useEffect(() => {
    async function err() {
      const { rows, columns } = await tables();
      setState(rows);
    }
    //check is connection is active to etherum
    const checkConnection = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const addresses = await provider.listAccounts();
      if (addresses.length) {
        err();
        setUserAddress(addresses[0]);
      } else {
        ("");
      }
    };
    checkConnection();
  }, [state]);

  //adds new password
  async function adds(e) {
    const win = typeof window !== "undefined" ? window : "";
    e.preventDefault();
    const rede = await Lit(pass, win.ethereum.selectedAddress, user);
    await red(val, rede);
    document.querySelector("#form").reset();
  }

  //search function
  const search = async (vals) => {
    setInputs(vals);
    if (inputs !== "") {
      const rear = state.filter((ea) => {
        return ea[0].toLowerCase().includes(inputs.toLowerCase());
      });
      console.log(rear)
      setFilterItems(rear);
    } else {
      setFilterItems(state);
    }
  };

  async function dear(a, b) {
    console.log((b.target.value = a));
  }

  //used to hide the remove button and display the show button
  async function show(b, e) {
    const parent = e.target.parentElement
    const parents = parent.parentElement
    e.target.parentElement.style.display = "none";
    const circling = parents.querySelector(".lds-ring");
    circling.style.display = "inline-block";
    const red = await decrypt(b);
    
    const obj = JSON.parse(red);
    setName(obj.username);
    setNamel(obj.password);
    
   
    const inputs = parents.querySelectorAll("input");
    

    const show = parents.querySelector(".tear");
    inputs[0].value = obj.username
    inputs[1].value = obj.password
    circling.style.display = "none";
    show.style.display = "flex";
  }

  //hides the show button and password
  const Hider = (e) => {
    const parent = e.target.parentElement
    const parents = parent.parentElement
    const show = parents.querySelector(".tear");
    const hidden = parents.querySelector(".remss");
    show.style.display = "none";
    hidden.style.display = "flex";
  };

  //close form
  const close = (e) => {
    e.target.parentElement.style.display = "none";
  }

  return (
    <div className style={{ paddingTop: "105px", textAlign: "center" }}>
      <div
        style={{
          marginLeft: "180px",
          marginRight: "183px",
          border: "1px #dadce0 solid",
          borderRadius: "6px",
        }}
      >
        <div>
          <div
            className="open"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding:"20px"
            }}
          >
            <form 
              id="form"
              style={{
                display: "none",
                marginBottom: "20px",
                alignItems: "center",
                flexDirection:"column",
                margin:"auto",
                border:"1px solid grey",
                padding:"20px",
                borderRadius:"5px",
                zIndex:"6",
                backgroundColor:"#f4f4f4",
          
              }}
              onSubmit={adds}
              className="form"
            >
              <button className="close" onClick={(e) => close(e)} style={{border:"0", borderRadius:"4px", color:"white", cursor:"pointer", background:"red", transform:"translateX(100px)"}}>close</button>
              <div style={{paddingBottom:"10px"}} >
                <label style={{display:"block", textAlign:"initial", paddingTop:"10px", paddingBottom:"3px"}}>label for password</label>
                <input type="text" onChange={(e) => setVal(e.target.value)}  style={{padding:"10px"}} />
              </div>
              <div style={{paddingBottom:"10px"}}>
                <label  style={{display:"block", textAlign:"initial", paddingTop:"10px",paddingBottom:"3px" }}>Username</label>
                <input type="text" onChange={(e) => setUser(e.target.value)}  style={{padding:"10px"}} />
              </div>
              <div style={{paddingBottom:"10px"}}>
                <label  style={{display:"block", textAlign:"initial", paddingTop:"10px", paddingBottom:"3px"}}>Password</label>
                <input
                  type="password"
                  onChange={(e) => setPass(e.target.value)}
                  style={{padding:"10px"}}
                />
              </div>
              <button
                type="submit"
                style={{
                  padding: "10px",
                  width: "100%",
                  color: "white",
                  backgroundColor: "black",
                  border: "0",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Add
              </button>
            </form>
          </div>
          <p style={{ color: "#676a6f" }}>
            See, change, or remove passwords you saved{" "}
          </p>
          <p style={{ color: "#676a6f" }}>
            Password are secured with Lit protcol{" "}
            <a
              class="a-tag"
              style={{
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              learn more
            </a>
          </p>
          <div style={{}}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #dadce0",
                padding: "20px",
                marginTop: "10px",
              }}
            >
              <h1>site</h1>
              <input
                type="search"
                id="site-search"
                name="q"
                placeholder="search password"
                onChange={(e)=>(search(e.target.value))}
                style={{
                  borderRight: "0px",
                  borderLeft: "0px",
                  borderTop: "0px",
                  padding: "10px",
                }}
              ></input>
            </div>
            {inputs.length > 1 ? (filterItems.map((a)=>{
              return(
                <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #dadce0",
                  padding: "20px",
                  marginTop: "10px",
                }}
              >
                <label key="" style={{overflow:"hidden"}}>{a[0]}</label>
                <div className="remss">
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
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                <div
                  className="tear"
                  style={{
                    display: "none",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  {/* <input
                    type="password"
                    style={{ border: "0px" }}
                    readOnly
                    onClick={(e) => dear(a[1], e)}
                  ></input> */}
                  <div style={{ marginBottom: "8px" }}>
                    <input
                      style={{
                        marginLeft: "6px",
                        marginRight: "8px",
                        padding: "10px",
                      }}
                      // value={name}
                      readOnly
                    />
                  </div>
                  <div style={{ marginBottom: "8px" }}>
                    <input
                      style={{
                        marginLeft: "6px",
                        marginRight: "8px",
                        padding: "10px",
                      }}
                      // value={namel}
                      readOnly
                    />
                  </div>
                  <button
                    style={{
                      cursor: "pointer",
                      width: "80px",
                      padding: "8px",
                      color: "white",
                      backgroundColor: "black",
                      border: "0",
                      borderRadius: "8px",
                      width: "100%",
                    }}
                    onClick={(e) => Hider(e)}
                  >
                    Hide
                  </button>
                </div>
              </div>)
            })):  (state.map((a) => {
              return(
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #dadce0",
                  padding: "20px",
                  marginTop: "10px",
                }}
              >
                <label key="" style={{overflow:"hidden"}}>{a[0]}</label>
                <div className="remss">
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
                <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                <div
                  className="tear"
                  style={{
                    display: "none",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  {/* <input
                    type="password"
                    style={{ border: "0px" }}
                    readOnly
                    onClick={(e) => dear(a[1], e)}
                  ></input> */}
                  <div style={{ marginBottom: "8px" }}>
                    <input
                      style={{
                        marginLeft: "6px",
                        marginRight: "8px",
                        padding: "10px",
                      }}
                      // value={name}
                      readOnly
                    />
                  </div>
                  <div style={{ marginBottom: "8px" }}>
                    <input
                      style={{
                        marginLeft: "6px",
                        marginRight: "8px",
                        padding: "10px",
                      }}
                      // value={namel}
                      readOnly
                    />
                  </div>
                  <button
                    style={{
                      cursor: "pointer",
                      width: "80px",
                      padding: "8px",
                      color: "white",
                      backgroundColor: "black",
                      border: "0",
                      borderRadius: "8px",
                      width: "100%",
                    }}
                    onClick={(e) => Hider(e)}
                  >
                    Hide
                  </button>
                </div>
              </div>)
             }))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
