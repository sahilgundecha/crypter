import { useState } from "react";
import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import "./WalletCard.css";
// import { makeStyles } from "@mui/styles";
import smallImg from "../../Assets/images/smallImg.svg";
import { Container, Switch } from "@mui/material";
import frame from "../../Assets/images/frame.svg";
import menu1 from "../../Assets/images/menu1.svg";
import btn3icon from "../../Assets/images/btn3icon.svg";
import pencil from "../../Assets/images/pencil.svg";

import bag from "../../Assets/images/bag.svg";
import cross from "../../Assets/images/cross.svg";
import greentick from "../../Assets/images/greentick.svg";
import btn4icon from "../../Assets/images/btn4icon.svg";
import btn2icon from "../../Assets/images/btn2icon.svg";
import upload from "../../Assets/images/upload.svg";
// import blue_img1 from "../../Assets/images/blue_img1.svg";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
// import ButtonComponent from "../ButtonComponent/ButtonComponent";

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
//modals1
const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  bgcolor: "background.paper",

  p: 2,
  px: 4,
  pb: 3,
  backgroundColor: "#FCFCFD",
  borderRadius: "10px",
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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          //   sx={{ boxShadow: "none" }}
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
                  onClick={handleOpen}
                >
                  Manage fund on Coinbase
                </Button>

                <StyledModal
                  aria-labelledby="unstyled-modal-title"
                  aria-describedby="unstyled-modal-description"
                  open={open}
                  onClose={handleClose}
                  BackdropComponent={Backdrop}
                >
                  <Box sx={style}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="h4"
                        gutterBottom
                        component="div"
                        // className="modalhead"
                      >
                        Folow steps
                      </Typography>
                      <img
                        className="blue_img"
                        src={cross}
                        alt="img"
                        width={"35px"}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        marginTop: "35px",
                      }}
                    >
                      <img src={upload} alt="img" width={"50px"} />

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          marginLeft: "30px",
                        }}
                      >
                        <Typography
                          component="div"
                          variant="h6"
                          className="subhead"
                        >
                          Upload files & Mint token
                        </Typography>
                        <Typography
                          component="div"
                          className="subtext"
                          color="text.secondary"
                        >
                          Call contract method
                        </Typography>
                      </Box>
                      {/* <h2 id="unstyled-modal-title">Folow steps</h2> */}
                      {/* <p id="unstyled-modal-description">
                      Aliquid amet deserunt earum!
                    </p> */}
                    </Box>
                    <Button className="px-4 me-3 rounded-pill startnowbtn">
                      Start now
                    </Button>

                    <Box
                      sx={{
                        display: "flex",
                        marginTop: "35px",
                      }}
                    >
                      <img src={pencil} alt="img" width={"50px"} />

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          marginLeft: "30px",
                        }}
                      >
                        <Typography
                          component="div"
                          variant="h6"
                          className="subhead"
                        >
                          Sign sell order
                        </Typography>
                        <Typography
                          component="div"
                          color="text.secondary"
                          className="subtext"
                        >
                          Sign sell order using your wallet
                        </Typography>
                      </Box>
                      {/* <h2 id="unstyled-modal-title">Folow steps</h2> */}
                      {/* <p id="unstyled-modal-description">
                      Aliquid amet deserunt earum!
                    </p> */}
                    </Box>
                    <Button className="px-4 me-3 rounded-pill startnowbtn">
                      Start now
                    </Button>

                    <Box
                      sx={{
                        display: "flex",
                        marginTop: "35px",
                      }}
                    >
                      <img src={bag} alt="img" width={"50px"} />

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          marginLeft: "30px",
                        }}
                      >
                        <Typography
                          component="div"
                          variant="h6"
                          className="subhead"
                        >
                          Sign lock order
                        </Typography>
                        <Typography
                          component="div"
                          color="text.secondary"
                          className="subtext"
                        >
                          Sign sell order using your wallet
                        </Typography>
                      </Box>
                      {/* <h2 id="unstyled-modal-title">Folow steps</h2> */}
                      {/* <p id="unstyled-modal-description">
                      Aliquid amet deserunt earum!
                    </p> */}
                    </Box>
                    <Button className="px-4 me-3 rounded-pill startnowbtn">
                      Start now
                    </Button>
                  </Box>
                </StyledModal>
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
              <img
                className="blue_img"
                // src={props.menu1 ? props.menu1 : menu1}
                src={menu1}
                alt="img"
                width={"20px"}
              />
              {/* <img
                src={menu1}
                onMouseOver={(this.src =blue_img1)}
                onMouseOut={(this.src =menu1)}
              /> */}

              <Typography
                color="text.secondary"
                component="div"
                className="btntext"
              >
                My profile
                {/* {props.btntext1 ? props.btntext1 : "My profile"} */}
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
                // src={props.btn2icon ? props.btn2icon : btn2icon}
                src={btn2icon}
                alt="img"
                width={"20px"}
              />
              <Typography
                color="text.secondary"
                component="div"
                className="btntext"
              >
                {/* {props.btntext2 ? props.btn2icon : "My items"} */}
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
                <img
                  // src={props.btn3icon ? props.btn3icon : btn3icon}
                  src={btn3icon}
                  alt="img"
                  width={"20px"}
                />
                <Typography
                  color="text.secondary"
                  component="div"
                  className="btntext4"
                >
                  {/* {props.btntext3 ? props.btntex3 : "Dark theme"} */}
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
                // src={props.btn4icon ? props.btn4icon : btn4icon}
                src={btn4icon}
                alt="img"
                width={"20px"}
              />
              <Typography
                color="text.secondary"
                component="div"
                className="btntext"
              >
                {/* {props.btntext4 ? props.btntext4 : "Disconnect"} */}
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
