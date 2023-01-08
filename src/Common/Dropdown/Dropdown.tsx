import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import "./Dropdown.css";

interface drop {
  options: { value: string | number; lable: string | number }[];
  label?: string;
}
const Dropdown = (props: drop) => {
  const [age, setAge] = useState<string | number>(props.options[0].value?props.options[0].value:props.options[0].lable);
  const [Clicked, setClicked] = useState<boolean>(true);

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
        sx={{ borderRadius: "12px", backgroundColor: "#ffffff" }}
      >
        {props.options.map((option) => {
          return <MenuItem value={option.value?option.value:option.lable}>{option.lable}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
