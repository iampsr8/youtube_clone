import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate=useNavigate()
    const handleSumbit = (e) =>{
        e.preventDefault()
        if (searchTerm) {
            navigate(`/search/${searchTerm}`)
            setSearchTerm('')
        }
    }
  return (
    <Paper
      component="form"
      onSubmit={handleSumbit}
      sx={{
        borderRadius: 20,
        border: "1px solid #3a3c41",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        background: "#121212"
      }}
    >
      <input
        className="search-bar"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{background: "#121212"}}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
