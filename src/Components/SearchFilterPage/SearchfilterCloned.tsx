import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Searchbar from "../Searchbar/Searchbar";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Dropdown from "../Dropdown/Dropdown";

const SearchfilterCloned = () => {
  return (
    <>
      <Container>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            marginBotton: "40px",
          }}
        >
          <Grid item xs={3}>
            <Typography variant="h5" gutterBottom component="div">
              Type your keywords
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <Searchbar
                icon={
                  <SearchRoundedIcon
                    style={{
                      color: "#fff",
                      backgroundColor: "#3772ff",
                      borderRadius: "20px",
                      padding: "5px",
                      fontSize: "large",
                    }}
                  />
                }
              />
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Grid item xs={3}>
            <Box>
              <Dropdown
                item1="Newest"
                item2="Oldest"
                // item3="Lowest Price"
              />
            </Box>
          </Grid>
          <Grid item xs={3}>
            Lorem ipsum dolor sit amet.
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={3}>
            Lorem, ipsum dolor.
          </Grid>
          <Grid item xs={9}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            delectus. Iusto quaerat officia sit cum veritatis omnis fugit
            placeat mollitia expedita nesciunt hic rem quae porro pariatur, a
            officiis est.
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SearchfilterCloned;
