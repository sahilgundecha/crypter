import React from "react";
import "./ProfilePage.css";
import { Grid, Paper, Button, Box, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import coverDemoImg from "../../Assets/images/coverDemoImg.png";
import CSS from "csstype";
import { UsersCard } from "../../Components/UsersCard/UsersCard";
import { FollowersCard } from "../../Components/FollowersCard/FollowersCard";
import { AppBar } from "@mui/material";
// import { TabPanel } from "@mui/lab";


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

const styles = {
  paperContainer: {
    backgroundImage: `url(${coverDemoImg})`,
    width: "100%",
    height: "400px",
    // position:"relative",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
};
function allyProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function ProfilePage() {
  const [value, setvalue] = React.useState(0);

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setvalue(newValue);
  };
  
  return (
    <Grid>
      <Paper style={styles.paperContainer}>
        <Button
          sx={{
            textTransform: "none",
            borderRadius: "15px",
            color: "#fff",
            border: "2px solid #fff",
            padding: "5px 12px",
            margin: "12px",
          }}
        >
          Edit cover photo
        </Button>
        <Button
          sx={{
            textTransform: "none",
            borderRadius: "15px",
            color: "#fff",
            border: "2px solid #fff",
            padding: "5px 12px",
            margin: "12px",
          }}
        >
          Edit profile
        </Button>
      </Paper>
      <Grid container spacing={2}>
        <Grid className="usercardGrid_Styling">
          <UsersCard />
        </Grid>
        <Grid className="navpill_Styling">
          {/* <FollowersCard/> */}
          {/* <AppBar> */}
          <Grid>
            <Tabs
              value={value}
              onChange={handleChange}
              // variant="scrollable"
              // scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="On Sales" {...allyProps(0)} sx={{textTransform:"none",color:"#777E90"}} />
              <Tab label="Collectibles" {...allyProps(1)} sx={{textTransform:"none",color:"#777E90"}} />
              <Tab label="Created" {...allyProps(2)} sx={{textTransform:"none",color:"#777E90"}} />
              <Tab label="Likes" {...allyProps(3)}  sx={{textTransform:"none",color:"#777E90"}}/>
              <Tab label="Following" {...allyProps(4)} sx={{textTransform:"none",color:"#777E90"}}/>
              <Tab label="Followers" {...allyProps(5)} sx={{textTransform:"none",color:"#777E90"}}/>
            </Tabs>
            {/* </AppBar> */}
            <TabPanel value={value} index={0}>
              
            </TabPanel>
            <TabPanel value={value} index={1}>
              
            </TabPanel>
            <TabPanel value={value} index={2}>
              
            </TabPanel>
            <TabPanel value={value} index={3}>
              
            </TabPanel>
            <TabPanel value={value} index={4}>
            <FollowersCard/>
            </TabPanel>
            <TabPanel value={value} index={5}>
              <FollowersCard/>
            </TabPanel>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
