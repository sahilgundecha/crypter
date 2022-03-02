import React from "react";
import "./SearchFilter.css";
import Container from "@mui/material/Container";
import Dropdown from "../Dropdown/Dropdown";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Searchbar from "../Searchbar/Searchbar";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import SliderComponent from "../Slider/Slider";
import { typography } from "@mui/system";
import reset from "../../Assets/images/resetFilter.svg";
import { Paper } from "@mui/material";
import Data from "../Bidcard/bidcardArray";

import Bidcard from "../Bidcard/Bidcard";
interface cardProps {
  colData: {
    cardIt: {
      id: number;
      mainImg: string;
      artName: string;
      ETH: number;
      inStock: number;
      highestBid: number;
      bidtype: string;
      creatorList?: any;
    }[];
  };
}
const SearchFilter = () => {
  return (
    <Container sx={{ margin: "40px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h5" gutterBottom component="div">
            Type your keywords
          </Typography>
        </Box>
        <Box>
          <Searchbar />
        </Box>
      </Box>
      <Divider sx={{ margin: "30px 0px" }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Dropdown />
        </Box>
        <Box>
          <p>Lorem ipsum dolor sit amet.</p>
        </Box>
      </Box>
      <Grid container>
        <Grid item md={2}>
          <Box>
            <SliderComponent />
          </Box>
          <Divider sx={{ margin: "10px 0px" }} />
          <Box>
            <Dropdown />
          </Box>
          <Box>
            <Dropdown />
          </Box>
          <Box>
            <Dropdown />
          </Box>
          <Divider sx={{ margin: "10px 5px" }} />

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",

              alignItems: "center",
            }}
          >
            <img src={reset} alt="icon" />
            <Typography className="reset">reset filter</Typography>
          </Box>
        </Grid>
        <Grid md={1}></Grid>
        <Grid item md={9}>
          <Grid container spacing={2}>
            <Grid item md={4}>
              <Paper sx={{ padding: "15px", borderRadius: "15px" }}>
                <Bidcard colData={Data} />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchFilter;
