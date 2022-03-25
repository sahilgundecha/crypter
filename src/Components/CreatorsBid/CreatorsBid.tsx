import { useState } from "react";
import "./CreatorsBid.css";
import Typography from "@mui/material/Typography";
import { Container, Box, Grid } from "@mui/material";
import card1 from "../../Assets/images/HomeImg.png";
import disIcon from "../../Assets/images/disIcon.svg";
import plus from "../../Assets/images/rightImg.svg";
import { Link } from "react-router-dom";
import user1 from "../../Assets/images/user1.png";
import CreatorsItems from "./CreatorsItems";
import {
  CreatorsArray,
  LatestUpdatesArray,
} from "../../DB/CreatorsBid/CreatorsArray";
import ButtonComponent from "../../Common/ButtonComponent/ButtonComponent";
import LatestUpdates from "./LatestUpdates";
const styleBT = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
};

export default function CreatorsBid() {
  const [show, setShow] = useState(false);

  const handleMouseOver = () => {
    setShow(true);
  };
  const handleMouseOut = () => {
    setShow(false);
  };
  return (
    <>
      <Grid container sx={{ margin: "30px 0px ", overflowY: "hidden" }}>
        <Grid item md={4} sm={12} xs={12} className="styleBird">
          <Link to="/item" className="firstSection">
            <Box className="container">
              <Box className="birdImg zoomDiv">
                <img className="changeWidth1 image" src={card1} />
                <Box className="middle">
                </Box>
              </Box>

              <Box sx={styleBT}>
                <Box sx={styleBT}>
                  <Box>
                    <img width={30} src={user1} />
                  </Box>
                  <Box sx={{ padding: "15px 10px" }}>
                    <Typography className="styleFuture">
                      The Future of ETH®
                    </Typography>
                    <Typography sx={{ fontSize: "13px" }}>
                      18 in stock
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography className="fontC5">Highest bid</Typography>
                  <Typography className="priceBor">1.124 ETH</Typography>
                </Box>
              </Box>
            </Box>
          </Link>
        </Grid>
        <Grid item md={5} sm={7} xs={12} className="styleHidden">
          {CreatorsArray.map((item, index) => (
            <CreatorsItems CreatorsArray={item} key={item.id} />
          ))}
        </Grid>
        <Grid item md={3} sm={12} xs={12} className="latestStyle">
          <Typography className="fontC5 styleCreators">
            Latest upload from creators 🔥
          </Typography>

          <Box className="flexRow">
            {LatestUpdatesArray.map((item) => (
              <LatestUpdates CreatorsArray3={item} key={item.id} />
            ))}
          </Box>
          <Link to="/search-filter" className="linkUnderline styleHidden">
            <ButtonComponent
              btnColor={"#23262F"}
              styleType={"outline"}
              classNames="StyleDis"
            >
              <span>
                Discover more <img src={disIcon} />
              </span>
            </ButtonComponent>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
