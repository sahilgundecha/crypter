import { useState } from "react";
import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./WalletCard.css";
import smallImg from "../../Assets/images/smallImg.svg";
import { Container, Switch } from "@mui/material";
import frame from "../../Assets/images/frame.svg";
import menu1 from "../../Assets/images/menu1.svg";
import btn3icon from "../../Assets/images/btn3icon.svg";
import btn4icon from "../../Assets/images/btn4icon.svg";
import btn2icon from "../../Assets/images/btn2icon.svg";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";

const styles = {
  borderRadius: "25px",
  color: "black",
  border: "1px solid #777E90",
};
const styles1 = {
  color: "#ffffff",
  backgroundColor: "#3772FF",
  borderRadius: "25px",
  border: "1px solid #3772FF",
};

interface walletcardProps {
  title?: string;
  name?: string;
  password?: string;
  ETH?: string | number;
  img?: string;
}
const WalletCard = (props: walletcardProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const [hover, setHover] = useState<boolean>(false);

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <>
      <Container>
        <Card
          sx={{ width: "300px", boxShadow: "2px 25px 30px 25px #0f0f0f1a" }}
        >
          <CardContent>
            <Typography variant="h5" className="marginRight" component="div">
              {props.name ? props.name : "Enrico Cole"}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {props.password ? props.password : "0xc4c16ab5ac7d...b21a"}
              </Typography>

              <img src={smallImg} alt="img" width={"15px"} className="pswimg" />
            </Box>
            <Card sx={{ boxShadow: "0px 7px 5px 6px #0F0F0F1A" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "250px",
                }}
              >
                <img src={frame} alt="img" width={"70px"} />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent
                    sx={{
                      flex: "1 0 auto",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                      className="text1"
                    >
                      {props.title ? props.title : "Balance"}
                    </Typography>
                    <Typography component="div" variant="h5">
                      {props.ETH ? props.ETH : "4.689"} ETH
                    </Typography>
                  </CardContent>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",

                  marginBottom: "10px",
                }}
              >
                <Button
                  onMouseOver={handleMouseIn}
                  onMouseOut={handleMouseOut}
                  style={hover ? styles1 : styles}
                >
                  Manage fund on Coinbase
                </Button>
              </Box>
            </Card>

            <Box
              className="wrapper"
              sx={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #777E90",
                padding: "10px 0px",
                marginTop: "15px",
              }}
            >
              <img className="blue_img" src={menu1} alt="img" width={"20px"} />

              <Typography
                color="text.secondary"
                component="div"
                className="btntext"
              >
                My profile
              </Typography>
            </Box>
            <Box
              className="wrapper"
              sx={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #777E90",
                padding: "10px 0px",
              }}
            >
              <img
                className="blue_img"
                src={btn2icon}
                alt="img"
                width={"20px"}
              />
              <Typography
                color="text.secondary"
                component="div"
                className="btntext"
              >
                My items
              </Typography>
            </Box>
            <Box
              className="wrapper"
              sx={{
                display: "flex",

                justifyContent: "space-between",
                borderBottom: "1px solid #777E90",
                padding: "10px 0px",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <img src={btn3icon} alt="img" width={"20px"} />
                <Typography
                  color="text.secondary"
                  component="div"
                  className="btntext4"
                >
                  Dark theme
                </Typography>
              </Box>

              <Box>
                <Switch />
              </Box>
            </Box>
            <Box
              className="wrapper"
              sx={{
                display: "flex",
                alignItems: "center",

                padding: "10px 0px",
              }}
            >
              <img
                className="blue_img"
                src={btn4icon}
                alt="img"
                width={"20px"}
              />
              <Typography
                color="text.secondary"
                component="div"
                className="btntext"
              >
                Disconnect
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};
export default WalletCard;
