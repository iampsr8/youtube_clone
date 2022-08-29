import React, { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../images/ylogo.png";
import SearchBar from "./SearchBar";
// import { logo } from '../utils/constants'

const Navbar = () => {
  const [screenSize, setScreenSize] = useState(null);
  const [activeHeader, setActiveHeader] = useState(true);

  useEffect(() => {
    const handleResize=()=>setScreenSize(window.innerWidth)
        window.addEventListener('resize',handleResize)
        handleResize()
        return ()=>window.removeEventListener('resize',handleResize)
  }, []);

  useEffect(() => {
    if (screenSize < 768) {
      setActiveHeader(false);
    } else {
      setActiveHeader(true);
    }
  }, [screenSize]);
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
        zIndex:10
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={40} />
        {activeHeader && (
          <h1
            style={{ color: "white", fontFamily: "Fira Sans Extra Condensed", paddingLeft: "5px" }}
          >
            YeahTube
          </h1>
        )}
        {/* <h1 style={{color:'white',fontFamily:'Roboto', paddingLeft:'5px'}}>YeahTube</h1> */}
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
