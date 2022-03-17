import { useState } from "react";
import "./SellerBuyerCard.css";
import Dropdown from "../../Common/Dropdown/Dropdown";
import SellerBuyerCarousel from "./SellerBuyerCarousel";
import {
  MenuItem,
  FormControl,
  Box,
  Typography,
  Select,
  SelectChangeEvent,
} from "@mui/material";

function SellerBuyerCard() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ background: "#E6E8EC", marginBottom: "50px", height: "640px",padding:'0px 30px' }}>
      <Box className="circularDropdown">
        <Box>
          <Typography
            variant="h5"
            style={{ color: "#777E90", marginLeft: "15px" }}
            component="div"
          >
            Popular
          </Typography>

          {/* <Dropdown item1="Seller" item2="Buyers" />
          <Typography
            variant="h5"
            style={{ color: "#777E90", marginLeft: "20px" }}
            component="div"
          >
            Popular
          </Typography> */}
          <FormControl
            className="formcontrol"
            sx={{
              minWidth: 150,
              margin: "0px",
            }}
          >
            <Select
              className="select"
              sx={{
                borderRadius: "40px",
                fontSize: "25px",
                borderColor: "transparent",
                background: "#E6E8EC",
                borderStyle: "none",
                outline: "none",
                border: "none",
                boxShadow: "none",
                minWidth: 190,
                appearance: "none",
                margin: "0px",
              }}
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem
                style={{
                  minWidth: "max-content",
                  fontSize: "30px",
                  fontWeight: "bold",
                  borderRadius: "40px",
                }}
                value=""
              >
                <em> Seller</em>
              </MenuItem>

              <MenuItem
                style={{ width: "170px", fontSize: "30px", fontWeight: "bold" }}
              >
                Buyers
              </MenuItem>
            </Select>
          </FormControl>
          {/* <Dropdown item1="Seller" item2="Buyers" /> */}
        </Box>
        <Box width="250px">
          <Dropdown
            label=" TIME FRAME"
            item1="Today"
            item2="Morning"
            item3="Dinner"
            item4="Evening"
          />
        </Box>
      </Box>

      <Box>
        <SellerBuyerCarousel />
      </Box>
    </Box>
  );
}

export default SellerBuyerCard;
