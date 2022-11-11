import { ConnectButton as Connect } from "@rainbow-me/rainbowkit";
import { required } from "../api/tableland";

function ConnectButton() {
  return (
    <div style={{ display: "flex" }}>
      <Connect
        label="Login"
        showBalance={false}
        accountStatus={{
          smallScreen: "avatar",
          largeScreen: "avatar",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "4px",
          width: "100px",
          color: "white",
          backgroundColor: "black",
          border: "0",
          borderRadius: "10px",
          cursor: "pointer",
          marginRight: "-5px",
          marginLeft:"10px"
        }}
        onClick={() => required()}
      >
        Create Table
      </button>
    </div>
  );
}

export default ConnectButton;
