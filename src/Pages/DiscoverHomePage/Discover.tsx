import React, { ReactNode, useState, SetStateAction } from "react";
import {
  Divider,
  Container,
  Box,
  Typography,
  Button,
  Tabs,
  Tab,
  Grid,
} from "@mui/material";
import "./Discover.css";
import Dropdown from "../../Common/Dropdown/Dropdown";
import filter from "../../Assets/images/filter.svg";
import cross from "../../Assets/images/filterCross.svg";
import Data from "../../DB/BidCard/BidcardArray";
import Bidcard from "../../Components/Bidcard/Bidcard";
import SliderComponent from "../../Components/Slider/Slider";

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

function allyProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Discover = () => {
  const [value, setvalue] = useState(0);
  const [openFilter, setOpenFilter] = useState(false);

  const HandleOpen = () => {
    setOpenFilter(!openFilter);
  };

  const handleChange = (event: any, newValue: SetStateAction<number>) => {
    setvalue(newValue);
  };
  return (
    <>
      <Container>
        <Box sx={{ margin: "50px" }}>
          <Typography variant="h3" gutterBottom component="div">
            Discover
          </Typography>
        </Box>
        <Grid container className="ItemWrapper">
          <Box className="discoverDropdown">
            <Dropdown item1="Recently added" item2="Long added"></Dropdown>
          </Box>
          <Box className="discoverDropdown displayInTab">
            <Dropdown
              item1="Verified only"
              item2="All"
              item3="Most liked"
            ></Dropdown>
          </Box>
          <Box className="hideInTab">
            <Grid className="navpillStylingDiscover">
              <Grid className="tabTopGrid_Styling">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                  className="tabsStyling"
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
          <Box>
            <Button
              variant="contained"
              className="filterButton"
              onClick={HandleOpen}
            >
              Filter
              <img
                src={openFilter ? cross : filter}
                alt="icon"
                className="filterIcon"
              />
            </Button>
          </Box>
        </Grid>
        {openFilter ? (
          <Box>
            <Divider sx={{ margin: "30px 8px" }} />
            <Grid container className="ItemWrapper">
              <Box className="discoverDropdownBelow">
                <Dropdown
                  item1="Highest price"
                  item2="The lowest price"
                  label="PRICE"
                ></Dropdown>
              </Box>
              <Box className="discoverDropdownBelow">
                <Dropdown
                  item1="Most liked"
                  item2="Least Liked"
                  label="LIKES"
                ></Dropdown>
              </Box>
              <Box className="discoverDropdownBelow">
                <Dropdown
                  item1="Verified only"
                  item2="All"
                  item3="Most liked"
                  label="CREATOR"
                ></Dropdown>
              </Box>
              <Box className="discoverDropdownBelow">
                <SliderComponent />
              </Box>
            </Grid>
          </Box>
        ) : null}

        <Box>
          <TabPanel value={value} index={0}>
            <Grid container className="ItemWrapper">
              {Data.map((item, index) => (
                <Bidcard cardData={item} key={item.id} />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container className="ItemWrapper">
              {Data.map((item, index) => (
                <Bidcard cardData={item} key={item.id} />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Grid container className="ItemWrapper">
              {Data.map((item, index) => (
                <Bidcard cardData={item} key={item.id} />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Grid container className="ItemWrapper">
              {Data.map((item, index) => (
                <Bidcard cardData={item} key={item.id} />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Grid container className="ItemWrapper">
              {Data.map((item, index) => (
                <Bidcard cardData={item} key={item.id} />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Grid container className="ItemWrapper">
              {Data.map((item, index) => (
                <Bidcard cardData={item} key={item.id} />
              ))}
            </Grid>
          </TabPanel>
        </Box>
      </Container>
    </>
  );
};

export default Discover;
