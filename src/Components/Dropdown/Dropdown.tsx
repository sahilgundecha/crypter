import React, { useState } from "react";
import downicon from "../../Assets/images/downArrow.svg";
import upicon from "../../Assets/images/upArrow.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import "./Dropdown.css";

import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
interface drop {
  item1?: string;
  item2?: string;
  item3?: string;
  item4?: string;
  item5?: string;
  item6?: string;
  label?: string;
}
const Dropdown = (props: drop) => {
  const [age, setAge] = useState<string>("1");
  const [Clicked, setClicked] = useState<boolean>(true);
  const arr = ["highest price", "average price", "lowest price"];

  const isClicked = () => {
    setClicked(!Clicked);
  };
  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: "100%",
        background: "#ffffff",
        borderRadius: "14px",
        cursor: "pointer",
      }}
    >
      {props.label ? (
        <Typography
          variant="subtitle2"
          component="span"
          className="dropdownLabel"
        >
          {props.label}
        </Typography>
      ) : null}
      <Select
        value={age}
        onChange={handleChange}
        onOpen={isClicked}
        onClose={isClicked}
        inputProps={{ "aria-label": "Without label" }}
        IconComponent={KeyboardArrowDownIcon}
        sx={{ borderRadius: "12px" }}
      >
        {props.item1 ? <MenuItem value={1}>{props.item1}</MenuItem> : null}
        {props.item2 ? <MenuItem value={2}>{props.item2}</MenuItem> : null}
        {props.item3 ? <MenuItem value={3}>{props.item3}</MenuItem> : null}
        {props.item4 ? <MenuItem value={4}>{props.item4}</MenuItem> : null}
        {props.item5 ? <MenuItem value={5}>{props.item5}</MenuItem> : null}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
