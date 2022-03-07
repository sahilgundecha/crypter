import React, { useState } from "react";
import "./Item.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import headImg from "../../Assets/images/Video.png";
const Item = () => {
  return (
    <Container>
      <Grid container spacing={5} sx={{ margin: "50px" }}>
        <Grid item xs={12} xl={7} md={7} lg={7} sm={12} className="relativeDiv">
          <Box>
            <img src={headImg} alt="bidImage" style={{ width: "100%" }} />
          </Box>
          <Box className="artWrapper">
            <Typography variant="subtitle2" component="span" className="art">
              ART
            </Typography>
            <Typography variant="subtitle2" component="span" className="unlock">
              UNLOCKABLE
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} xl={4} md={4} lg={4} sm={12}>
          <Box>
            <Typography variant="h4" gutterBottom component="div">
              The amazing art
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Item;
