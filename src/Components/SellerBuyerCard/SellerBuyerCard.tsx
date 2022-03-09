import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import WhiteCards from "../WhiteCards/WhiteCards";
import SellerBuyerCarousel from "./SellerBuyerCarousel";

function SellerBuyerCard() {
  return (
    <div style={{ background: "#ecedf3", marginBottom: "50px" }}>
      <Box
        sx={{
          padding: "50px 30px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h3" color="#777E90" component="div">
            Popular
          </Typography>
          <Dropdown item1="Seller" item2="Buyers" />
        </Box>
        <Box>
          <Typography variant="p" color="text.secondary" component="div">
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

      <Box>
        <SellerBuyerCarousel />
      </Box>
    </div>
  );
}

export default SellerBuyerCard;
