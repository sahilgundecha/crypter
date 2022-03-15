import React, { useState, ReactNode, SetStateAction } from "react";
import "./SearchFilter.css";
import {
  Container,
  Box,
  Typography,
  Divider,
  Grid,
  Tabs,
  Tab,
} from "@mui/material";
import Dropdown from "../../Common/Dropdown/Dropdown";
import SliderComponent from "../Slider/Slider";
import reset from "../../Assets/images/resetFilter.svg";
import Data from "../../DB/BidCard/BidcardArray";
import Searchbar from "../../Common/Searchbar/Searchbar";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Bidcard from "../Bidcard/Bidcard";
import ButtonComponent from "../../Common/ButtonComponent/ButtonComponent";

interface TabPanelProps {
  children?: ReactNode;
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
  const [value, setvalue] = useState(0);
  const [search, setSearch] = useState(true);
  const [loadmore, setLoadmore] = useState(true);

  const LoadMore = () => {
    setLoadmore(false);
  };

  const chnageSearch = () => {
    setSearch(false);
  };

  const handleChange = (event: any, newValue: SetStateAction<number>) => {
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
        <Box className="dropdownWrapper">
          <Dropdown item1="Newest" item2="Oldest" />
        </Box>
        <Box className="widthSm" sx={{ marginRight: "20px" }}>
          <Grid className="navpill_Styling">
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
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid item md={2} className="dropdownWrapper">
          <Box className="dropdownWrapper">
            <SliderComponent />
          </Box>

          <Box className="dropdownWrapper">
            <Dropdown item1="Most Liked" item2="Least Liked" label="PRICE" />
          </Box>
          <Box className="dropdownWrapper">
            <Dropdown
              item1="All Colors"
              item2="Black"
              item3="Green"
              item4="Pink"
              item5="Purple"
              label="COLOR"
            />
          </Box>
          <Box className="dropdownWrapper">
            <Dropdown
              item1="Verified olny"
              item2="All"
              item3="Most liked"
              label="CREATOR"
            />
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

        <Grid item md={9}>
          <TabPanel value={value} index={0}>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {Data.filter(function (cardData) {
                return cardData.id <= 6;
              }).map((item, index) => (
                <Bidcard cardData={item} key={item.id} />
              ))}
            </Grid>
            {loadmore ? (
              <Grid
                container
                spacing={2}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <ButtonComponent
                  styleType="outline"
                  classNames="headButton"
                  btnColor="#23262F"
                  handleClick={LoadMore}
                >
                  Load more
                </ButtonComponent>
              </Grid>
            ) : (
              <Grid container spacing={2}>
                {Data.filter(function (cardData) {
                  return cardData.id >= 7;
                }).map((item, index) => (
                  <Bidcard cardData={item} key={item.id} />
                ))}
              </Grid>
            )}
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {Data.filter(function (cardData) {
                return cardData.id <= 6;
              }).map((item, index) => (
                <Bidcard cardData={item} key={item.id} />
              ))}
            </Grid>
            {loadmore ? (
              <Grid
                container
                spacing={2}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <ButtonComponent
                  styleType="outline"
                  classNames="headButton"
                  btnColor="#23262F"
                  handleClick={LoadMore}
                >
                  Load more
                </ButtonComponent>
              </Grid>
            ) : (
              <Grid container spacing={2}>
                {Data.filter(function (cardData) {
                  return cardData.id >= 7;
                }).map((item, index) => (
                  <Bidcard cardData={item} key={item.id} />
                ))}
              </Grid>
            )}
          </TabPanel>

          <TabPanel value={value} index={2}>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {Data.filter(function (cardData) {
                return cardData.id <= 6;
              }).map((item, index) => (
                <Bidcard cardData={item} key={item.id} />
              ))}
            </Grid>
            {loadmore ? (
              <Grid
                container
                spacing={2}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <ButtonComponent
                  styleType="outline"
                  classNames="headButton"
                  btnColor="#23262F"
                  handleClick={LoadMore}
                >
                  Load more
                </ButtonComponent>
              </Grid>
            ) : (
              <Grid container spacing={2}>
                {Data.filter(function (cardData) {
                  return cardData.id >= 7;
                }).map((item, index) => (
                  <Bidcard cardData={item} key={item.id} />
                ))}
              </Grid>
            )}
          </TabPanel>

          <TabPanel value={value} index={3}>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {Data.filter(function (cardData) {
                return cardData.id <= 6;
              }).map((item, index) => (
                <Bidcard cardData={item} key={item.id} />
              ))}
            </Grid>
            {loadmore ? (
              <Grid
                container
                spacing={2}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <ButtonComponent
                  styleType="outline"
                  classNames="headButton"
                  btnColor="#23262F"
                  handleClick={LoadMore}
                >
                  Load more
                </ButtonComponent>
              </Grid>
            ) : (
              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                {Data.filter(function (cardData) {
                  return cardData.id >= 7;
                }).map((item, index) => (
                  <Bidcard cardData={item} key={item.id} />
                ))}
              </Grid>
            )}
          </TabPanel>

          <TabPanel value={value} index={4}>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {Data.filter(function (cardData) {
                return cardData.id <= 6;
              }).map((item, index) => (
                <Bidcard cardData={item} key={item.id} />
              ))}
            </Grid>
            {loadmore ? (
              <Grid
                container
                spacing={2}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <ButtonComponent
                  styleType="outline"
                  classNames="headButton"
                  btnColor="#23262F"
                  handleClick={LoadMore}
                >
                  Load more
                </ButtonComponent>
              </Grid>
            ) : (
              <Grid container spacing={2}>
                {Data.filter(function (cardData) {
                  return cardData.id >= 7;
                }).map((item, index) => (
                  <Bidcard cardData={item} key={item.id} />
                ))}
              </Grid>
            )}
          </TabPanel>

          <TabPanel value={value} index={5}>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {Data.filter(function (cardData) {
                return cardData.id <= 6;
              }).map((item, index) => (
                <Bidcard cardData={item} key={item.id} />
              ))}
            </Grid>
            {loadmore ? (
              <Grid
                container
                spacing={2}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <ButtonComponent
                  styleType="outline"
                  classNames="headButton"
                  btnColor="#23262F"
                  handleClick={LoadMore}
                >
                  Load more
                </ButtonComponent>
              </Grid>
            ) : (
              <Grid container spacing={2}>
                {Data.filter(function (cardData) {
                  return cardData.id >= 7;
                }).map((item, index) => (
                  <Bidcard cardData={item} key={item.id} />
                ))}
              </Grid>
            )}
          </TabPanel>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SearchFilter;
