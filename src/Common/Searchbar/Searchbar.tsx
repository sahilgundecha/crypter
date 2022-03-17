import { useState } from "react";
import { Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Searchbar.css";

const Searchbar = (props: any) => {
  const [searchedData, setsearchedData] = useState<string>("");

  return (
    <>
      <Paper
        className="SearchBar"
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          width: "auto",
          border: "2px solid lightgrey",
          boxShadow: "none",
          borderRadius: props.borderRadius ? props.borderRadius : "15px",
        }}
      >
        <InputBase
          className="Mui-focused"
          sx={{
            ml: 1,
            flex: 1,
          }}
          placeholder={props.placeholder ? props.placeholder : "Search"}
          inputProps={{ "aria-label": "search" }}
          value={searchedData}
          onChange={(event) => {
            setsearchedData(event.target.value);
          }}
        />
        <IconButton aria-label="search">
          {props.icon ? props.icon : <SearchIcon />}
        </IconButton>
      </Paper>
    </>
  );
};

export default Searchbar;
