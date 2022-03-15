import { ReactNode, useState, SetStateAction } from "react";
import "./Discover.css";
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
import SliderComponent from "../../Components/Slider/Slider";
import filter from "../../Assets/images/filter.svg";
import cross from "../../Assets/images/filterCross.svg";
import Dropdown from "../../Common/Dropdown/Dropdown";
import Data from "../../DB/BidCard/BidcardArray";
import Bidcard from "../../Components/Bidcard/Bidcard";

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
        <Box sx={{ marginY: "50px" }}>
          <Typography variant="h3" gutterBottom component="div">
            Discover
          </Typography>
        </Box>
        <Box className="navBox">
          <Box className="dropdownWrapper">
            <Dropdown item1="Recently added" item2="Long added" />
          </Box>
          <Box>
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
          <Box className="dropdownWrapper">
            <Button
              variant="contained"
              className="filterButton"
              onClick={HandleOpen}
            >
              Filter{" "}
              <img
                src={openFilter ? cross : filter}
                alt="icon"
                className="bigiImg1"
              />
            </Button>
          </Box>
        </Box>
      </Container>

      {openFilter ? (
        <Container>
          <Divider sx={{ margin: "10px 8px" }} />
          <Box className="navBox">
            <Box className="dropdownWrapper">
              <Dropdown
                item1="Highest price"
                item2="The lowest price"
              ></Dropdown>
            </Box>
            <Box className="dropdownWrapper">
              <Dropdown item1="Most liked" item2="Least Liked"></Dropdown>
            </Box>
            <Box className="dropdownWrapper">
              <Dropdown
                item1="Verified only"
                item2="All"
                item3="Most liked"
              ></Dropdown>
            </Box>
            <Box className="sliderWrapper">
              <SliderComponent />
            </Box>
          </Box>
        </Container>
      ) : null}
      <Container className="overflowInSmall">
        <TabPanel value={value} index={0}>
          <Grid container className="widthTab">
            {Data.map((item, index) => (
              <Bidcard cardData={item} key={item.id} />
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container>
            {Data.map((item, index) => (
              <Bidcard cardData={item} key={item.id} />
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container>
            {Data.map((item, index) => (
              <Bidcard cardData={item} key={item.id} />
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Grid container>
            {Data.map((item, index) => (
              <Bidcard cardData={item} key={item.id} />
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Grid container>
            {Data.map((item, index) => (
              <Bidcard cardData={item} key={item.id} />
            ))}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Grid container>
            {Data.map((item, index) => (
              <Bidcard cardData={item} key={item.id} />
            ))}
          </Grid>
        </TabPanel>
      </Container>
    </>
  );
};

export default Discover;
