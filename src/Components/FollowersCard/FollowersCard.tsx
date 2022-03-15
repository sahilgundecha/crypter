import React from "react";
import { Avatar, Grid, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "./followersCard.css";
import img1 from "../../Assets/images/sally-profile-img.png";
import { Data } from "../../DB/FollowersCard/FollowersCardArray";
import { grid } from "@mui/system";
import img2 from "../../Assets/images/sally-profile-img.png";

interface userDataProps {
  details: {
    id: number;
    img: string;
    name: string;
    followers: number;
    coverImg1: string;
    coverImg2: string;
    coverImg3: string;
    coverImg4: string;
  }[];
  buttonText?: string;
}

export const FollowersCard = () => {
  return (
    <Grid className="rootStyle">
      <UsersCard details={Data} buttonText="Follow" />
    </Grid>
  );
};
export const FollowingCard = () => {
  return (
    <Grid className="rootStyle">
      <UsersCard details={Data} buttonText="Unfollow" />
    </Grid>
  );
};
const UsersCard = (props: userDataProps) => {
  return (
    <div>
      {props.details.map((x) => {
        return (
          <Grid className="followersCardTopBlock" key={x.id}>
            <Grid className="followersCard_media">
              <Avatar
                alt="Nat Geo"
                sx={{ width: "88px", height: "88px", margin: "14px 20px" }}
                src={x.img}
              />
              <Grid className="profileStyle">
                <Grid className="nameStyling">
                  <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                    {x.name}
                  </Typography>
                  <Typography sx={{ fontSize: "12px", color: "#777E90" }}>
                    {x.followers} followers
                  </Typography>
                </Grid>
                <Grid className="buttonin768">
                  <Button
                    disableElevation
                    color="primary"
                    variant="contained"
                    sx={{
                      backgroundColor: "#3772FF",
                      fontSize: "11px !important",
                      width: "70px",
                      height: "30px",
                      borderRadius: "30px",
                      marginTop: "12px",
                      textTransform: "none",
                      padding: "3px 6px",
                    }}
                  >
                    {props.buttonText}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <div className="followersCardImg_style">
              <Grid className="coverImgStyle ">
                <img src={x.coverImg1} className="imgStyle" />
                <img src={x.coverImg2} className="imgStyle" />
                <img src={x.coverImg3} className="imgStyle" />
                <img
                  src={x.coverImg4}
                  className="imgStyle"
                  style={{ opacity: "0.5" }}
                />
              </Grid>
            </div>
          </Grid>
        );
      })}
    </div>
  );
};
