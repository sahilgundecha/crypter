import { Avatar, Box, Button, Grid, Paper, TextField } from "@mui/material";
import React from "react";
import "./EditProfilePage.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
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
        >
          <span style={{ marginRight: "8px", marginTop: "3px" }}>
            <KeyboardBackspaceIcon fontSize="small" />
          </span>
          Back to profile
        </Button>
        <Button sx={{ textTransform: "none", fontSize: "#777E90v" }}>
          <Link
            style={{ color: "#777E90", marginRight: "16px" }}
            to={""}
            className="profileLink"
          >
            profile
          </Link>
          <KeyboardArrowRightIcon fontSize="small" sx={{ color: "#777E90" }} />
          <span style={{ color: "#23262F", marginLeft: "16px" }}>
            Edit Profile
          </span>
        </Button>
      </Paper>
      <Grid className="headDiv">
        <Grid>
          <p className="EditPageHeading">Edit profile</p>
          <p className="EditPagepara">
            You can set preferred display name, create your profile URL and
            manage other personal settings.
          </p>
          <Grid container>
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
            <Grid className="AccountInfoStyle">
            <p style={{fontSize:"16px",fontWeight:"600",marginBottom:"30px"}}>Account Info</p>
            <p className="labelStyling" style={{marginTop:"20px"}}>DISPLAY NAME</p>
            <TextField label="Enter your display name" sx={{width:"95%",borderRadius:"20px !important"}}/>
            <p className="labelStyling" style={{marginTop:"20px"}}>CUSTOM URL</p>
            <TextField label="ui8.net/Your custom URL" sx={{width:"95%",borderRadius:"20px !important"}}/>
            <p className="labelStyling" style={{marginTop:"20px"}}>BIO</p>
            <TextField label="About yourselt in a few words"  multiline rows={3} sx={{width:"95%",borderRadius:"20px !important"}}/>
            
            </Grid>
            
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
