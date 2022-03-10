import { Avatar, Box, Button, FormControl, Grid, Paper, TextField } from "@mui/material";
import React from "react";
import "./EditProfilePage.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Link } from "react-router-dom";
import img1 from "../../Assets/images/enrieCole.png";
import { Label } from "@mui/icons-material";

export default function EditProfilePage() {
  return (
    <Grid>
      <Paper className="headContainer">
        <Button
          sx={{
            textTransform: "none",
            borderRadius: "24px",
            color: "#23262F",
            border: "2px solid #E6E8EC",
            padding: "5px 20px",
            fontSize: "14px",
          }}
          onClick={()=>{window.location.href = './ProfilePage'}}
        >
          <span style={{ marginRight: "8px", marginTop: "3px" }}>
            <KeyboardBackspaceIcon fontSize="small" />
          </span>
          Back to profile
        </Button>
        <Grid style={{ textTransform: "none", fontSize: "#777E90v" }} className="profilespan">
          <a
            href="./ProfilePage"
            style={{ marginRight: "16px" }}
            // to={""}
            className="profileLink"
          >
            profile
          </a>
          <KeyboardArrowRightIcon fontSize="small" sx={{ color: "#777E90" }} />
          <span style={{ color: "#23262F", marginLeft: "16px" }} >
            Edit Profile
          </span>
        </Grid>
      </Paper>
      <Grid className="headDiv">
        <Grid className="ProfileSectionStyle">
          <p className="EditPageHeading">Edit profile</p>
          <p className="EditPagepara">
            You can set preferred display name, create your profile URL and
            manage other personal settings.
          </p>
          <Grid className="EditPageContent">
            <Grid className="ProfileGrid">
              <Avatar src={img1} className="profilePicstyle" />
              <Grid>
                <p style={{fontSize:"16px",fontWeight:"600"}}>Profile Photo</p>
                <p style={{fontSize:"12px",color:"#777E90"}}>
                  We recommend an image of at least 400x400.Gifs work too 🙌
                </p>
                <Button
                  sx={{
                    textTransform: "none",
                    borderRadius: "20px",
                    color: "#23262F",
                    border: "2px solid #E6E8EC",
                    padding: "5px 20px",
                    fontSize: "13px",
                  }}
                >
                  Upload
                </Button>
              </Grid>
            </Grid>
            <FormControl className="AccountInfoStyle">
                <Grid>
            <p style={{fontSize:"16px",fontWeight:"600",marginBottom:"0px"}}>Account Info</p>
            <p className="labelStyling" style={{marginTop:"30px"}}>DISPLAY NAME</p>
            <TextField label="Enter your display name" sx={{width:"95%",borderRadius:"20px !important"}}/>
            <p className="labelStyling" style={{marginTop:"30px"}}>CUSTOM URL</p>
            <TextField label="ui8.net/Your custom URL" sx={{width:"95%",borderRadius:"20px !important"}}/>
            <p className="labelStyling" style={{marginTop:"30px"}}>BIO</p>
            <TextField label="About yourselt in a few words"  multiline rows={3} sx={{width:"95%",borderRadius:"20px !important"}}/>
            </Grid>
            <Grid>
            <p style={{fontSize:"16px",fontWeight:"600",marginBottom:"0px", marginTop:"40px"}}>Social</p>
            <p className="labelStyling" style={{marginTop:"30px"}}>PORTFOLIO OR WEBSITE</p>
            <TextField label="Enter URL" sx={{width:"95%",borderRadius:"20px !important"}}/>
            <p className="labelStyling" style={{marginTop:"30px"}}>TWITTER</p>
            <Grid className="idtextfield"><input className="twitterInput" placeholder="@twitter username"/>
            <Button
                  className="verifyButton"
                  sx={{
                    textTransform: "none",
                    borderRadius: "20px",
                    color: "#777E90",
                    border: "2px solid #E6E8EC",
                    padding: "5px 10px",
                    marginTop:"7px",
                    fontSize: "13px",
                  }}
                >Verify account</Button>
            </Grid>
            <Button
                  sx={{
                    textTransform: "none",
                    borderRadius: "20px",
                    color: "#777E90",
                    border: "2px solid #E6E8EC",
                    padding: "5px 20px",
                    marginTop:"20px",
                    fontSize: "13px",
                  }}
                >
                 <span ><AddCircleOutlineOutlinedIcon fontSize="small" sx={{marginTop:"7px",marginRight:"12px"}}/></span> Add more social account
                </Button>
                <p style={{color:"#777E90",fontSize:"14px",width:"80%"}}>To update your settings you should sign message through your wallet. Click 'Update profile' then sign the message</p>
            </Grid>
            
            </FormControl>
            
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
