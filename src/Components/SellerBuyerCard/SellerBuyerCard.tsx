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
  const [circulardrp, setcirculardrp] = useState<boolean>(true);
  const circulardrpfunc = () => {
    setcirculardrp(!circulardrp);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box className="graydiv">
      <Box
        sx={{
          width: "100%",
          margin: "0px auto",
        }}
      >
        <Box className="circularDropdown">
          <Box sx={{ marginRight: "auto" }}>
            <Typography
              variant="h5"
              fontWeight={"bold"}
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
            <Box>
              <FormControl
                className="formcontrol"
                sx={{
                  minWidth: 150,
                  margin: "0px",
                }}
              >
                <Select
                  className={circulardrp ? "select" : "setdropdown"}
                  onOpen={circulardrpfunc}
                  onClose={circulardrpfunc}
                  sx={{
                    borderRadius: "40px",
                    fontSize: "25px",
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
                    <em style={{ fontSize: "30px", fontWeight: "bold" }}>
                      Seller
                    </em>
                  </MenuItem>

                  <MenuItem
                    style={{
                      minWidth: "max-content",
                      fontSize: "30px",
                      fontWeight: "bold",
                      borderRadius: "40px",
                    }}
                  >
                    <em style={{ fontSize: "30px", fontWeight: "bold" }}>
                      Buyers
                    </em>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* <Dropdown item1="Seller" item2="Buyers" /> */}
          </Box>
          <Box className="dropdown2">
            <Dropdown
              label=" TIME FRAME"
              item1="Today"
              item2="Morning"
              item3="Dinner"
              item4="Evening"
            />
          </Box>
        </Box>
      </Box>

      <Box>
        <SellerBuyerCarousel />
      </Box>
    </Box>
  );
}

export default SellerBuyerCard;
