import Link from "next/link";
import ConnectButton from "./ConnectButton";
import Nav from "./Nav"
import React, {useState, useEffect} from "react";



function Header() {

	return (
	<div>
		<header className=" z-40 ... bg-black text-white p-20 border-b-2 border-fuchsia-600" style={{fontWeight:400, padding:"15px", color:"black", backgroundColor:"white", fontSize:"17px", position:"fixed", width:"100%", zIndex:"5", borderBottom:"1px solid #dadce0"}}>
			<div className="flex flex-row justify-between items-center" style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
				<Link href={"/"}>
					<p className="font-sans font-bold text-xl" style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", fontWeight:"900", fontSize:"18px"}}>
			         	<img style={{width:"30px"}} src="https://developer.litprotocol.com/img/logo.svg"/>Lit{""}Password <span style={{font: "5px", paddingRight:"30px"}}> Manager</span>
					</p>
				</Link>
				<div className="flex border-b-2 border-fuchsia-600" style={{ flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                    <Nav style={{border:"2px solid black"}}/>
					<ConnectButton/>
				</div>
			</div>
		</header>
	</div>
	)
}

export default Header