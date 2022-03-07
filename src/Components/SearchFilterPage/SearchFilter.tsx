import React from "react";
import "./SearchFilter.css";
import Container from "@mui/material/Container";
import Dropdown from "../Dropdown/Dropdown";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import SliderComponent from "../Slider/Slider";
// import { typography } from "@mui/system";
import reset from "../../Assets/images/resetFilter.svg";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import Data from "../Bidcard/bidcardArray";
import Searchbar from "../Searchbar/Searchbar";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SearchFilterCard from "./SearchFilterCard";
import Bidcard from "../Bidcard/Bidcard";

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
  const [search, setSearch] = React.useState(true);

  const chnageSearch = () => {
    setSearch(false);
  };

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setvalue(newValue);
  };

  return (
    <Container sx={{ marginTop: "30px" }}>
      <Box className="searchDiv">
        <Box className="widthSm">
          <Typography variant="h5" gutterBottom component="div">
            Type your keywords
          </Typography>
        </Box>
        <Box className="widthSm">
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
                className="searchbarIcon"
              />
            }
          />
        </Box>
      </Box>
      <Divider sx={{ margin: "30px 0px" }} />
      <Box className="searchDiv widthSm">
        <Box>
          <Dropdown
            item1="Newest"
            item2="Oldest"
            // item3="Lowest Price"
          />
        </Box>
        <Box className="widthSm">
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

              {/* <TabPanel value={value} index={1}></TabPanel> */}
              {/* <TabPanel value={value} index={2}></TabPanel> */}
              {/* <TabPanel value={value} index={3}></TabPanel> */}
              {/* <TabPanel value={value} index={4}></TabPanel> */}
              {/* <TabPanel value={value} index={5}></TabPanel> */}
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Grid container>
        <Grid item md={2}>
          <Box className="widthSm">
            <SliderComponent />
          </Box>

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
        <Grid md={1} className="hidden"></Grid>

        <Grid item md={9}>
          <TabPanel value={value} index={0}>
            <Grid container spacing={2}>
              {Data.map((item, index) => (
                <Bidcard cardData={item} key={item.id} />
              ))}
            </Grid>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Grid container spacing={2}>
              {Data.map((item, index) => (
                <Bidcard cardData={item} key={item.id} />
              ))}
            </Grid>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <Grid container spacing={2}>
              {Data.map((item, index) => (
                <Bidcard cardData={item} key={item.id} />
              ))}
            </Grid>
          </TabPanel>

          <TabPanel value={value} index={3}>
            <Grid container spacing={2}>
              {Data.map((item, index) => (
                <Bidcard cardData={item} key={item.id} />
              ))}
            </Grid>
          </TabPanel>

          <TabPanel value={value} index={4}>
            <Grid container spacing={2}>
              {Data.map((item, index) => (
                <Bidcard cardData={item} key={item.id} />
              ))}
            </Grid>
          </TabPanel>

          <TabPanel value={value} index={5}>
            <Grid container spacing={2}>
              {Data.map((item, index) => (
                <Bidcard cardData={item} key={item.id} />
              ))}
            </Grid>
          </TabPanel>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchFilter;
