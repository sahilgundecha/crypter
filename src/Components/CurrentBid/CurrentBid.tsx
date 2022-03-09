import React from "react";
import { useState, useRef, useEffect } from "react";
import "./CurrentBid.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import video from "../../Assets/images/Video.png";
import profile from "../../Assets/images/creator1.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Countdown from "react-countdown";
import green from "../../Assets/images/greenSquare.svg";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

interface currentProps {
  bidData: any;
}

const CurrentBid: React.FC<currentProps> = ({ bidData }) => {
  const endDat = bidData.endDate;
  const [hrs, setHrs] = useState<string | number>("00");
  const [mins, setMins] = useState<string | number>("00");
  const [secs, setSecs] = useState<string | number>("00");

  let interval: any = useRef();

  const startTimer = () => {
    const countdownDate = new Date(endDat).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const hr = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mn = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const sc = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setHrs(hr);
        setMins(mn);
        setSecs(sc);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <Container sx={{ margin: "0px 60px" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
          <img src={bidData.headimg} alt="homeImage" className="homeImg" />
        </Grid>
        <Grid item xs={12} sm={2} md={2} lg={4} xl={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              component="div"
              sx={{ color: "#23262F", fontWeight: "normal" }}
            >
              {bidData.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
              className="widthInPad"
            >
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box>
                  <img
                    src={profile}
                    alt="profile"
                    style={{ marginRight: "5px" }}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                    className="greyText"
                  >
                    Creator
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    {bidData.name}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box>
                  <img
                    src={green}
                    alt="profile"
                    style={{ marginRight: "5px" }}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="caption"
                    display="block"
                    gutterBottom
                    className="greyText"
                  >
                    Instant price
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    {bidData.ETHImg} ETH
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Card
                sx={{
                  margin: "20px 0px ",
                  boxShadow: "0px 64px 64px #1F2F461F",
                  borderRadius: "24px",
                  border: "2px solid #E6E8EC",
                }}
                className="card"
              >
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} gutterBottom>
                    Current Bid
                  </Typography>
                  <Typography variant="h3" component="div" className="ETH">
                    {bidData.CurrentBidETH} ETH
                  </Typography>
                  <Typography
                    sx={{ color: "#777E90", fontSize: "24px" }}
                    gutterBottom
                  >
                    ${bidData.Dollar}
                  </Typography>
                  <Typography variant="body2">Auction ending in</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#000000",
                          fontSize: "32px",
                          fontWeight: "bold",
                        }}
                      >
                        {hrs}
                      </Typography>
                      <Typography
                        sx={{ color: "#777E90", fontSize: "16px" }}
                        gutterBottom
                      >
                        Hrs
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#000000",
                          fontSize: "32px",
                          fontWeight: "bold",
                        }}
                      >
                        {mins}
                      </Typography>
                      <Typography
                        sx={{ color: "#777E90", fontSize: "16px" }}
                        gutterBottom
                      >
                        Mins
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#000000",
                          fontSize: "32px",
                          fontWeight: "bold",
                        }}
                      >
                        {secs}
                      </Typography>
                      <Typography
                        sx={{ color: "#777E90", fontSize: "16px" }}
                        gutterBottom
                      >
                        Secs
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <ButtonComponent classNames="ButtonClass" btnColor={"#3772FF"}>
                UPLOAD
              </ButtonComponent>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <ButtonComponent styleType="outline" classNames="ButtonClass1">
                Connect Wallet
              </ButtonComponent>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CurrentBid;
