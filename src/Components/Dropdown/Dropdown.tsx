import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import downicon from "../../Assets/images/downArrow.svg";
import upicon from "../../Assets/images/upArrow.svg";
import { FormControl } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import "./Dropdown.css";

import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
interface drop {
  option?: string[];
  item1?: string;
  item2?: string;
  item3?: string;
  item4?: string;
  item5?: string;
  item6?: string;
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

  // console.log(typeof option);

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
        {props.item1 ? <MenuItem value={1}>{props.item1}</MenuItem> : null}
        {props.item2 ? <MenuItem value={2}>{props.item2}</MenuItem> : null}
        {props.item3 ? <MenuItem value={3}>{props.item3}</MenuItem> : null}
        {props.item4 ? <MenuItem value={4}>{props.item4}</MenuItem> : null}
        {props.item5 ? <MenuItem value={5}>{props.item5}</MenuItem> : null}
        {/* {option.map((curr: any, index) => {
          <MenuItem value={index}>{curr}</MenuItem>;
        })} */}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
