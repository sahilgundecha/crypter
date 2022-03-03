import React from "react";
import "./SearchFilter.css";
import Container from "@mui/material/Container";
import Dropdown from "../Dropdown/Dropdown";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Searchbar from "../Searchbar/Searchbar";
import Divider from "@mui/material/Divider";
import SliderComponent from "../Slider/Slider";
import { typography } from "@mui/system";
import reset from "../../Assets/images/resetFilter.svg";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import Data from "../Bidcard/bidcardArray";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import Bidcard from "../Bidcard/Bidcard";
import SearchFilterCard from "./SearchFilterCard";
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
  const arr = ["highest price", "average price", "lowest price"];
  const arr2 = ["first price", "second price", "lowest price"];

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
          <Searchbar
            icon={
              <SearchRoundedIcon
                style={{
                  color: "#fff",
                  backgroundColor: "#3772ff",
                  borderRadius: "20px",
                  padding: "5px",
                  fontSize: "medium",
                }}
              />
            }
          />
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
          <Dropdown
            item1="Newest"
            item2="Oldest"
            // item3="Lowest Price"
          />
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
            <Dropdown item1="Most Liked" item2="Least Liked" />
          </Box>
          <Box>
            <Dropdown
              item1="All Colors"
              item2="Black"
              item3="Green"
              item4="Pink"
              item5="Purple"
            />
          </Box>
          <Box>
            <Dropdown item1="Verified olny" item2="All" item3="Most liked" />
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
            <SearchFilterCard colData={Data} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchFilter;
