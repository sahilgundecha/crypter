import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import WhiteCards from "../WhiteCards/WhiteCards";
import SellerBuyerCarousel from "./SellerBuyerCarousel";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function SellerBuyerCard() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ background: "#E6E8EC", marginBottom: "50px" }}>
      <Box
        sx={{
          padding: "50px 30px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h4" color="#777E90" component="div">
            Popular
          </Typography>
          <FormControl
            sx={{
              m: 1,
              minWidth: 190,
              backgroundColor: "#E6E8EC",
              outline: "none",
              border: "none",
            }}
          >
            <Select
              sx={{
                borderRadius: "35px",
                fontSize: "30px",
                borderColor: "transparent",
                background: "#E6E8EC",
              }}
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem
                style={{ width: "170px !important", fontSize: "30px" }}
                value=""
              >
                {" "}
                <em> Seller</em>
              </MenuItem>

              <MenuItem style={{ width: "170px", fontSize: "30px" }}>
                Buyers
              </MenuItem>
            </Select>
          </FormControl>
          {/* <Dropdown item1="Seller" item2="Buyers" /> */}
        </Box>
        <Box>
          <Typography
            sx={{ fontWeight: "bold" }}
            variant="p"
            color="text.secondary"
            component="div"
          >
            TIME FRAME
          </Typography>
          <Dropdown
            item1="Today"
            item2="Morning"
            item3="Dinner"
            item4="Evening"
          />
        </Box>
      </Box>

      <Box sx={{ padding: "60px 0px" }}>
        <SellerBuyerCarousel />
      </Box>
    </Box>
  );
}

export default SellerBuyerCard;
