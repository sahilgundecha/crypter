import { useState, useEffect, useRef, FC } from "react";
import { Link } from "react-router-dom";
import "./CurrentBid.css";
import {
  Container,
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import ButtonComponent from "../../Common/ButtonComponent/ButtonComponent";
import ConnectWalletModal from "../Modals/ConnectWalletModal/ConnectWalletModal";

interface currentProps {
  bidData: any;
}

const BidCloned: FC<currentProps> = ({ bidData }) => {
  const endDate = bidData.endDate;
  const [hrs, setHrs] = useState<string | number>("00");
  const [mins, setMins] = useState<string | number>("00");
  const [secs, setSecs] = useState<string | number>("00");

  let interval: any = useRef();

  const startTimer = () => {
    const countdownDate = new Date(endDate).getTime();

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
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={12} xl={7} md={7} lg={7} sm={12}>
          <img src={bidData.headimg} alt="bidImage" style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} xl={4} md={4} lg={4} sm={12}>
          <Box>
            <Typography variant="h2" component="div">
              {bidData.name}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>
                <img
                  src={bidData.creatorProfile}
                  alt="icon"
                  style={{ marginRight: "10px" }}
                />
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  className="grayText"
                >
                  Creator
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  className="profileName"
                >
                  {bidData.creatorName}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>
                <img
                  src={bidData.EthImg}
                  alt="profile"
                  style={{ marginRight: "10px" }}
                />
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  className="grayText"
                >
                  Instant price
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  className="profileName"
                >
                  {bidData.ETHPrice} ETH
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Card
              sx={{
                padding: "10px",
                boxShadow: "0px 64px 64px #1F2F461F",
                borderRadius: "24px",
                border: "2px solid #E6E8EC",
                margin: "20px 0px",
              }}
            >
              <CardContent>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                  Current Bid
                </Typography>
                <Typography
                  variant="h3"
                  component="div"
                  className="CurrentBid_ETH"
                >
                  {bidData.CurrentBidETH} ETH
                </Typography>
                <Typography
                  sx={{ color: "#777E90", fontSize: "24px" }}
                  gutterBottom
                >
                  $3456.9
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
            <Box sx={{ textAlign: "center" }}>
              <Box sx={{ textAlign: "center" }}>
                <ConnectWalletModal />
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Link to="/item" className="linkUnderline">
                  <ButtonComponent
                    styleType="outline"
                    btnColor={"#000"}
                    classNames="ButtonClass1"
                  >
                    View item
                  </ButtonComponent>
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BidCloned;
