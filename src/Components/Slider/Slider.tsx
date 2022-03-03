import React from "react";
import Box from "@mui/material/Box";
import { Container, Slider } from "@mui/material";
import "./slider.css";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { borderBottom, styled } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import { useState } from "react";
import cross from "../../Assets/images/cross.svg";
import { ImportantDevices } from "@mui/icons-material";
import pinkicon from "../../Assets/images/pinkicon.svg";
import CircularProgress from "@mui/material/CircularProgress";
import usersimg from "../../Assets/images/usersimg.png";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    p: true;
  }
}

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

function valuetext(value: number) {
  return `${value}ETH`;
}
interface sliderprops {
  value?: number;
  children?: string[];
  title?: string;
  ETH1?: string | number;
  ETH2?: string | number;
}

const SliderComponent = (props: sliderprops) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = useState<boolean>(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  return (
    <>
      <Container>
        <Box sx={{ width: "100%", padding: "10px 0px" }}>
          <Typography className="text">
            {props.title ? props.title : "PRICE RANGE"}
          </Typography>
          <Slider
            sx={{
              width: "100%",
              height: "5px",
            }}
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
            // getAriaValueText={valueLabelFormat}
            valueLabelFormat={valuetext}
            min={0}
            max={10}
            step={1}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography className="sliderText">
              {props.ETH1 ? props.ETH1 : "0.01ETH"}
            </Typography>
            <Typography className="sliderText">
              {props.ETH2 ? props.ETH2 : "10ETH"}
            </Typography>

            <Button
              onClick={handleOpen}
              className="px-4 me-3 rounded-pill startnowbtn"
            >
              modals button
            </Button>
            {/* THIS IS MODAL 1 */}
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
                    Checkout
                  </Typography>
                  <img
                    className="blue_img"
                    src={cross}
                    alt="img"
                    width={"35px"}
                  />
                </Box>
                <Typography component="div" className="para1">
                  You are about to purchase C O I N Z from UI8
                </Typography>

                <Box
                  sx={{
                    justifyContent: "space-between",
                    borderBottom: "1px solid gray",
                    display: "flex",
                    margin: "15px 0px",
                  }}
                >
                  <Typography variant="h6" component="div">
                    0.007
                  </Typography>
                  <Typography variant="h6" component="div">
                    ETH
                  </Typography>
                </Box>

                <Box
                  sx={{
                    justifyContent: "space-between",

                    display: "flex",
                  }}
                >
                  <Typography variant="p" color="#777E90" component="div">
                    Your balance
                  </Typography>
                  <Typography variant="h6" component="div">
                    8.498 ETH
                  </Typography>
                </Box>
                <Box
                  sx={{
                    justifyContent: "space-between",

                    display: "flex",
                  }}
                >
                  <Typography variant="p" color="#777E90" component="div">
                    Service fee
                  </Typography>
                  <Typography variant="h6" component="div">
                    0 ETH
                  </Typography>
                </Box>
                <Box
                  sx={{
                    justifyContent: "space-between",

                    display: "flex",
                  }}
                >
                  <Typography variant="p" color="#777E90" component="div">
                    You will pay
                  </Typography>
                  <Typography variant="h6" component="div">
                    0.007 ETH
                  </Typography>
                </Box>
                <Box
                  className="pinkBox"
                  sx={{
                    backgroundColor: "#EF466F14",
                    display: "flex",
                    justifyContent: "space-evenly",
                    borderRadius: "10px",
                    padding: "25px",
                    margin: "15px 0px",
                  }}
                >
                  <Box>
                    <img src={pinkicon} alt="img" width={"30px"} />
                  </Box>
                  <Box>
                    <Typography variant="h6" className="pinkText">
                      This creator is not verified
                    </Typography>
                    <Typography variant="p" className="pinkText">
                      Purchase this item at your own risk
                    </Typography>
                  </Box>
                </Box>
                <Box className="buttonBox">
                  <Button
                    onClick={handleOpen1}
                    className="px-4 me-3 rounded-pill startnowbtn3"
                  >
                    I Understand ,continue
                  </Button>

                  {/* THIS IS MODAL 2 */}
                  <StyledModal
                    aria-labelledby="unstyled-modal-title"
                    aria-describedby="unstyled-modal-description"
                    open={open1}
                    onClose={handleClose1}
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
                          className="blue_img1"
                          src={cross}
                          alt="img"
                          width={"35px"}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          margin: "30px 0px",
                        }}
                      >
                        <Box>
                          <CircularProgress disableShrink />
                        </Box>
                        <Box
                          sx={{
                            marginRight: "80px",
                          }}
                        >
                          <Typography variant="h6" component="div">
                            Purchasing
                          </Typography>
                          <Typography
                            variant="p"
                            color="#777E90"
                            component="div"
                          >
                            Sending transaction with your wallet
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        className="pinkBox"
                        sx={{
                          backgroundColor: "#EF466F14",
                          display: "flex",
                          justifyContent: "space-evenly",
                          borderRadius: "10px",
                          padding: "25px",
                          margin: "15px 0px",
                        }}
                      >
                        <Box>
                          <img
                            src={pinkicon}
                            alt="img"
                            className="pinkimg"
                            width={"30px"}
                          />
                        </Box>
                        <Box>
                          <Typography variant="h6" className="pinkText">
                            This creator is not verified
                          </Typography>
                          <Typography variant="p" className="pinkText">
                            Purchase this item at your own risk
                          </Typography>
                        </Box>
                        <Box>
                          <img
                            src={usersimg}
                            className="pinkimg"
                            alt="img"
                            width={"35px"}
                          />
                        </Box>
                      </Box>
                      <Box className="buttonBox">
                        <Button className="px-4 me-3 rounded-pill startnowbtn3">
                          I understand, continue
                        </Button>
                      </Box>

                      <Box>
                        <Button className="px-4 me-3 rounded-pill startnowbtn2">
                          Cancel
                        </Button>
                      </Box>
                    </Box>
                  </StyledModal>
                  <Box className="cancelbtnbox">
                    <Button className=" rounded-pill startnowbtn2">
                      cancel
                    </Button>
                  </Box>
                </Box>
              </Box>
            </StyledModal>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default SliderComponent;
