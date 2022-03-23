import  { useState ,ReactNode ,SetStateAction} from "react";
import "./ProfilePage.css";
import { Link } from "react-router-dom";
import { Grid, Paper, Button, Box, Typography, Tabs, Tab } from "@mui/material";
import coverDemoImg from "../../Assets/images/bg_CoverImg.png";
import { UsersCard } from "../../Components/UsersCard/UsersCard";
import Upload_Icon from "../../Assets/images/Upload_Icon.svg"
import {
  FollowersCard,
  FollowingCard,
} from "../../Components/FollowersCard/FollowersCard";
import iconStar from "../../Assets/images/icons-Star-Filled-Copy.png";
import iconEdit from "../../Assets/images/icons-Edit-Line.png";
import Data from "../../DB/BidCard/BidcardArray";
import Bidcard from "../../Components/Bidcard/Bidcard";
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
          <Grid>{children}</Grid>
        </Box>
      )}
    </div>
  );
}

const styles = {
  paperContainer: {
    backgroundImage: `url(${coverDemoImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  paperContainerUpload: {
    backgroundImage: `url(${coverDemoImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    padding:"10px"
  },
};
function allyProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function ProfilePage() {
  const [value, setvalue] = useState(0);
  const [uploadImage, setUploadImage] = useState(false);

  const handleUploadImage = () => {
    setUploadImage(!uploadImage)
  }

  const handleChange = (event: any, newValue: SetStateAction<number>) => {
    setvalue(newValue);
  };

  return (
    <Grid>
     { uploadImage ? <Grid style={styles.paperContainerUpload} className="paper_height">
        <Grid className="dashedBorderGrid">
        <Grid className="upload_Grid" component="label"> 
        <input type="file" hidden/>
        <Box>
          <img src={Upload_Icon} className="Upload_Icon_style"/>
          <Typography className="DragAndDropText">Drag and drop your photo here</Typography>
          <Typography className="Browsetext">or click to browse</Typography>
          </Box> 
        </Grid>
        <Grid className="SavePhotoBtn_grid">
        <ButtonComponent
                        handleClick={handleUploadImage}
                        btnColor={"#3772FF"}
                        classNames="savePhoto_btn"
                      >
                        Save Photo
                      </ButtonComponent>
                      </Grid>
                      </Grid>
      </Grid > :
        <Paper style={styles.paperContainer} className="paper_height">
        <Box className="button_div">
          <Button
          onClick={handleUploadImage}
            sx={{
              textTransform: "none",
              borderRadius: "20px",
              color: "#fff",
              padding: "7px 12px",
              margin: "12px",
              fontSize: "12px",
              boxShadow:" 0 0 0 2px #777e90 inset"
            }}
          >
            Edit cover photo
            <span>
              <img
                src={iconStar}
                style={{ width: "12px", marginLeft: "8px" }}
              />
            </span>
          </Button>
          <Link to="/edit-profile-page" className="linkUnderline">
            <Button
              sx={{
                textTransform: "none",
                borderRadius: "20px",
                color: "#fff",
                padding: "7px 12px",
                margin: "12px",
                fontSize: "12px",
                boxShadow:" 0 0 0 2px #777e90 inset"
              }}
            >
              Edit profile
              <span>
                <img
                  src={iconEdit}
                  style={{ width: "12px", marginLeft: "8px" }}
                />
              </span>
            </Button>
          </Link>
        </Box>
      </Paper> }
       
      <Grid container spacing={2} className="outerGrid_style">
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
              <Tab
                label="On Sales"
                {...allyProps(0)}
                sx={{ textTransform: "none", color: "#777E90" }}
              />
              <Tab
                label="Collectibles"
                {...allyProps(1)}
                sx={{ textTransform: "none", color: "#777E90" }}
              />
              <Tab
                label="Created"
                {...allyProps(2)}
                sx={{ textTransform: "none", color: "#777E90" }}
              />
              <Tab
                label="Likes"
                {...allyProps(3)}
                sx={{ textTransform: "none", color: "#777E90" }}
              />
              <Tab
                label="Following"
                {...allyProps(4)}
                sx={{ textTransform: "none", color: "#777E90" }}
              />
              <Tab
                label="Followers"
                {...allyProps(5)}
                sx={{ textTransform: "none", color: "#777E90" }}
              />
            </Tabs>

            <TabPanel value={value} index={0}>
              <Grid className="tabPanelSection-Style">
              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft:"0px",
                  justifyContent:"space-evenly"
                }}
              >
                {Data.filter(function (cardData) {
                  return cardData.id <= 6;
                }).map((item, index) => (
                  <Bidcard cardData={item} key={item.id} />
                ))}
              </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <Grid className="tabPanelSection-Style">
              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft:"0px",
                  justifyContent:"space-evenly"
                }}
              >
                {Data.filter(function (cardData) {
                  return cardData.id <= 4;
                }).map((item, index) => (
                  <Bidcard cardData={item} key={item.id} />
                ))}
              </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <Grid className="tabPanelSection-Style">
              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft:"0px",
                  justifyContent:"space-evenly"
                }}
              >
                {Data.filter(function (cardData) {
                  return cardData.id <= 2;
                }).map((item, index) => (
                  <Bidcard cardData={item} key={item.id} />
                ))}
              </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={3}>
            <Grid className="tabPanelSection-Style">
              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft:"0px",
                  justifyContent:"space-evenly"
                }}
              >
                {Data.filter(function (cardData) {
                  return cardData.id <= 4;
                }).map((item, index) => (
                  <Bidcard cardData={item} key={item.id} />
                ))}
              </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Grid className="tabPanelSection2-Style">
              <FollowingCard />
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={5}>
              <Grid className="tabPanelSection2-Style">
                <FollowersCard />
              </Grid>
            </TabPanel>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
