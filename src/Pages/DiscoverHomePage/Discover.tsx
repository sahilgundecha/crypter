import React from "react";
import "./Discover.css";
import Divider from "@mui/material/Divider";
import SliderComponent from "../../Components/Slider/Slider";
import bidIcon from "../../Assets/images/bidIcon.svg";
import filter from "../../Assets/images/filter.svg";
import cross from "../../Assets/images/filterCross.svg";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Dropdown from "../../Components/Dropdown/Dropdown";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import Data from "../../Components/Bidcard/bidcardArray";
import Bidcard from "../../Components/Bidcard/Bidcard";

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

function allyProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Discover = () => {
  const [value, setvalue] = React.useState(0);
  const [search, setSearch] = React.useState(true);
  const [openFilter, setOpenFilter] = React.useState(false);

  const HandleOpen = () => {
    setOpenFilter(!openFilter);
  };

  const chnageSearch = () => {
    setSearch(false);
  };

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
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
          <Box>
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
                {/* <TabPanel value={value} index={0}></TabPanel>
              <TabPanel value={value} index={1}></TabPanel>
              <TabPanel value={value} index={2}></TabPanel>
              <TabPanel value={value} index={3}></TabPanel>
              <TabPanel value={value} index={4}></TabPanel>
              <TabPanel value={value} index={5}></TabPanel> */}
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Button
              variant="contained"
              className="mybutton1"
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
            <Box>
              <Dropdown
                item1="Highest price"
                item2="The lowest price"
              ></Dropdown>
            </Box>
            <Box>
              <Dropdown item1="Most liked" item2="Least Liked"></Dropdown>
            </Box>
            <Box>
              <Dropdown
                item1="Verified only"
                item2="All"
                item3="Most liked"
              ></Dropdown>
            </Box>
            <Box sx={{ width: "200px" }}>
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
