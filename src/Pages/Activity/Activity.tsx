import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Divider,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Tabs,
  Tab,
  Paper,
} from "@mui/material";
import "./Activity.css";
import { cardData } from "../../DB/Activity/ActivityArray";
import { Notification } from "../../Components/Notification/NotificationD";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import buffer from "../../Assets/images/buffer.svg";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";

const boxStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px",
  margin: "7px 120px",
};
const boxStyle1 = {
  display: "flex",
  justifyContent: "space-between",
};
const textChange = {
  textTransform: "none",
  color: "#777E90",
};
const textStyle = {
  textDecoration: "none",
  color: "#777E90",
  marginRight: "10px",
  cursor: "pointer",
  fontSize: "15px",
};
const fBold = {
  fontWeight: "bold",
};
function allyProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const ButtonStyle = {
  textTransform: "none",
  borderRadius: "24px",
  color: "#23262F",
  border: "2px solid #E6E8EC",
  padding: "5px 20px",
  fontSize: "14px",
};
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
export default function Activity() {
  const [value, setvalue] = React.useState(0);
  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setvalue(newValue);
  };
  return (
    <>
      <Box sx={boxStyle}>
        <Box>
          <Link to="/Crypter" className="linkUnderline">
          <Button
            sx={ButtonStyle}>
            <span style={{ marginRight: "8px", marginTop: "3px" }}>
              <KeyboardBackspaceIcon fontSize="small" />
            </span>
            Back to profile
          </Button>
          </Link> 
        </Box>
        <Box className="lineStyle">
          <Typography component="a" sx={textStyle}>
            Home &gt;
          </Typography>
          <Typography component="p" sx={textStyle}>
            Update Items
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Container className="changeTop">
        <Grid container>
          <Grid item md={7} sm={12}>
            <Grid className="navPill">
              <Grid className="tabTopGrid_Styling">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                  className="tabs_Styling"
                >
                  <Tab label="My Activity" {...allyProps(0)} sx={textChange} />
                  <Tab label="Following" {...allyProps(1)} sx={textChange} />
                  <Tab label="All Activity" {...allyProps(2)} sx={textChange} />
                </Tabs>
                <TabPanel value={value} index={0}>
                  <Box sx={boxStyle1}>
                    <Typography variant="h4" sx={fBold}>
                      Activity{" "}
                    </Typography>
                    <ButtonComponent
                      btnColor={"#23262F"}
                      styleType={"outline"}
                      classNames="btnStyle1"
                    >
                      Mark as all read
                    </ButtonComponent>
                  </Box>
                  <Box>
                    <Notification colData={cardData} />
                  </Box>
                  <Box className="imgBox">
                    <img src={buffer} className="imgCenter" />
                  </Box>
                </TabPanel>
                <TabPanel value={value} index={1}></TabPanel>
                <TabPanel value={value} index={2}></TabPanel>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item md={4} sm={12} className="alignCard">
            <Paper className="stylePaper">
              <Typography variant="h6" sx={fBold}>
                Filters
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Sales"
                />
                <FormControlLabel control={<Checkbox />} label="listings" />
                <FormControlLabel control={<Checkbox />} label="Bids" />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Burns"
                />
                <FormControlLabel control={<Checkbox />} label="Followings" />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Likes"
                />
                <FormControlLabel control={<Checkbox />} label="Purchase" />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Transfers"
                />
              </FormGroup>
              <Divider />
              <Box sx={{ margin: "10px 20px" }}>
                <ButtonComponent
                  btnColor={"#23262F"}
                  styleType={"outline"}
                  classNames="btnStyle2"
                >
                  Select
                </ButtonComponent>
                <ButtonComponent
                  btnColor={"#23262F"}
                  styleType={"outline"}
                  classNames="btnStyle2"
                >
                  Unselect
                </ButtonComponent>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
