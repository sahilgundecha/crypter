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
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Bidcard from "../Bidcard/Bidcard";
import SearchFilterCard from "./SearchFilterCard";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

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
function allyProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SearchFilter = () => {
  const arr = ["highest price", "average price", "lowest price"];
  const arr2 = ["first price", "second price", "lowest price"];
  const [value, setvalue] = React.useState(0);

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setvalue(newValue);
  };

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
          <Grid className="navpill_Styling">
            {/* <FollowersCard/> */}
            {/* <AppBar> */}
            <Grid className="tabTopGrid_Styling">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                className="tabs_Styling"
              >
                <Tab
                  label="All Items"
                  {...allyProps(0)}
                  sx={{ textTransform: "none", color: "#777E90" }}
                />
                <Tab
                  label="Art"
                  {...allyProps(1)}
                  sx={{ textTransform: "none", color: "#777E90" }}
                />
                <Tab
                  label="Game"
                  {...allyProps(2)}
                  sx={{ textTransform: "none", color: "#777E90" }}
                />
                <Tab
                  label="Photography"
                  {...allyProps(3)}
                  sx={{ textTransform: "none", color: "#777E90" }}
                />
                <Tab
                  label="Music"
                  {...allyProps(4)}
                  sx={{ textTransform: "none", color: "#777E90" }}
                />
                <Tab
                  label="Video"
                  {...allyProps(5)}
                  sx={{ textTransform: "none", color: "#777E90" }}
                />
              </Tabs>
              {/* </AppBar> */}
              <TabPanel value={value} index={0}></TabPanel>
              <TabPanel value={value} index={1}>
                {/* <p>one</p> */}
              </TabPanel>
              <TabPanel value={value} index={2}>
                {/* {" "}
                <p>one</p> */}
              </TabPanel>
              <TabPanel value={value} index={3}>
                {/* {" "}
                <p>one</p> */}
              </TabPanel>
              <TabPanel value={value} index={4}>
                {/* <p>cfgvhnbj</p> */}
              </TabPanel>
              <TabPanel value={value} index={5}>
                {/* <p>one</p> */}
              </TabPanel>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Grid container>
        <Grid item md={2}>
          <Box>{/* <SliderComponent /> */}</Box>
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
            className="resetDiv"
          >
            <img src={reset} alt="icon" className="resetimg" />
            <Typography className="reset">reset filter</Typography>
          </Box>
        </Grid>
        <Grid md={1}></Grid>
        <Grid item md={9}>
          <Grid container spacing={2}>
            <Bidcard cardData={Data} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchFilter;
