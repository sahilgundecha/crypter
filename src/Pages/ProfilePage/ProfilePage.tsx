import React from "react";
import "./ProfilePage.css";
import { Grid, Paper, Button, Box, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import coverDemoImg from "../../Assets/images/bg_CoverImg.png";
import CSS from "csstype";
import { UsersCard } from "../../Components/UsersCard/UsersCard";
import { FollowersCard, FollowingCard } from "../../Components/FollowersCard/FollowersCard";
import { AppBar } from "@mui/material";
import Carosel from "../../Components/Bidcard/Carosel";
import iconStar from "../../Assets/images/icons-Star-Filled-Copy.png";
import iconEdit from "../../Assets/images/icons-Edit-Line.png";
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

const styles = {
  paperContainer: {
    backgroundImage: `url(${coverDemoImg})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    width: "100%",
    height:"350px",
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
        <Box className="button_div">
        <Button
          sx={{
            textTransform: "none",
            borderRadius: "20px",
            color: "#fff",
            border: "1.5px solid #fff",
            padding: "5px 12px",
            margin: "12px",
            fontSize:"12px"
          }}
        >
          Edit cover photo
          <span><img src={iconStar} style={{width:"12px", marginLeft:"8px"}}/></span>
        </Button>
        <Button
          sx={{
            textTransform: "none",
            borderRadius: "20px",
            color: "#fff",
            border: "1.5px solid #fff",
            padding: "5px 12px",
            margin: "12px",
            fontSize:"12px"
          }}
          onClick={()=>{window.location.href = './EditProfilePage'}}
        >
          Edit profile
          <span><img src={iconEdit} style={{width:"12px", marginLeft:"8px"}}/></span>
        </Button>
        </Box>
      </Paper>
      <Grid container spacing={2}>
        <Grid className="usercardGrid_Styling">
          <UsersCard />
        </Grid>
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
              <Tab label="On Sales" {...allyProps(0)} sx={{textTransform:"none",color:"#777E90"}} />
              <Tab label="Collectibles" {...allyProps(1)} sx={{textTransform:"none",color:"#777E90"}} />
              <Tab label="Created" {...allyProps(2)} sx={{textTransform:"none",color:"#777E90"}} />
              <Tab label="Likes" {...allyProps(3)}  sx={{textTransform:"none",color:"#777E90"}}/>
              <Tab label="Following" {...allyProps(4)} sx={{textTransform:"none",color:"#777E90"}}/>
              <Tab label="Followers" {...allyProps(5)} sx={{textTransform:"none",color:"#777E90"}}/>
            </Tabs>
            {/* </AppBar> */}
            <TabPanel value={value} index={0}>
            <Grid container xl={4}>
            {Data.map((item, index) => (
          <Bidcard cardData={item} key={item.id} />
        ))}
            </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <Grid container xl={4}>
            {Data.filter(function(cardData){return cardData.id<=4}).map((item, index) => (
          <Bidcard cardData={item} key={item.id} />
        ))}
            </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <Grid container xl={4}>
            {Data.map((item, index) => (
          <Bidcard cardData={item} key={item.id} />
        ))}
            </Grid>
            </TabPanel>
            <TabPanel value={value} index={3}>
            <Grid container xl={4}>
            {Data.map((item, index) => (
          <Bidcard cardData={item} key={item.id} />
        ))}
            </Grid>
            </TabPanel>
            <TabPanel value={value} index={4}>
            <FollowingCard/>
            </TabPanel>
            <TabPanel value={value} index={5}>
              <Grid container>
              <FollowersCard/>
              </Grid>
            </TabPanel>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
