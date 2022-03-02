import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import downicon from "../../Assets/images/downArrow.svg";
import upicon from "../../Assets/images/upArrow.svg";
import { FormControl } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import "./Dropdown.css";

import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";

const Dropdown = () => {
  const [age, setAge] = useState<string>("1");
  const [Clicked, setClicked] = useState<boolean>(true);

  const isClicked = () => {
    setClicked(!Clicked);
  };
  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select
        value={age}
        onChange={handleChange}
        onOpen={isClicked}
        onClose={isClicked}
        inputProps={{ "aria-label": "Without label" }}
        IconComponent={() => (
          <img src={Clicked ? downicon : upicon} style={{ margin: "10px" }} />
        )}
        sx={{ borderRadius: "12px" }}
      >
        <MenuItem value={1}>Highest Price</MenuItem>
        <MenuItem value={2}>Lowest Price</MenuItem>
        <MenuItem value={3}>Average Price</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Dropdown;
