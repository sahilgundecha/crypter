import { useState, ChangeEvent } from "react";
import "./Textfield.css";
import {
  InputBase,
  Box,
  InputLabel,
  NativeSelect,
  FormControl,
  alpha,
  styled,
} from "@mui/material";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 15,
    position: "relative",
    color: "#777E90",
    border: "1px solid grey",
    fontSize: 18,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));
export default function Textfield() {
  const [value, setvalue] = useState<string>("10");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setvalue(event.target.value);
  };
  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "auto" },
          gap: 2,
          marginTop: "50px",
        }}
      >
        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input">
            ITEM NAME
          </InputLabel>
          <BootstrapInput
            placeholder="e.g.Redeemable Bitcoin Card with logo'"
            id="bootstrap-input"
          />
        </FormControl>
      </Box>
      <Box
        component="form"
        noValidate
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "auto" },
          gap: 2,
          marginTop: "50px",
        }}
      >
        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input">
            DESCRIPTION
          </InputLabel>
          <BootstrapInput
            placeholder="e.g.'After puchaising you will be recieved the logo...'"
            id="bootstrap-input"
          />
        </FormControl>
      </Box>
      <Box
        component="form"
        noValidate
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "auto auto auto" },
          gap: 2,
          marginTop: "50px",
        }}
      >
        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="demo-customized-select-native">
            ROYALTIES
          </InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            value={value}
            onChange={handleChange}
            input={<BootstrapInput />}
          >
            <option aria-label="None" value="10%" />
            <option value={10}>10%</option>
            <option value={20}>20%</option>
            <option value={30}>30%</option>
          </NativeSelect>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input">
            SIZE
          </InputLabel>
          <BootstrapInput placeholder="e.g.5" id="bootstrap-input" />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel shrink htmlFor="bootstrap-input">
            PROPERTIE
          </InputLabel>
          <BootstrapInput placeholder="e.g.Forest" id="bootstrap-input" />
        </FormControl>
      </Box>
    </>
  );
}
