import "./PlaceaBidModals.css";
import { Typography,Button ,styled, Box } from "@mui/material";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import cross from "../../../Assets/images/cross.svg";
import React, { useState } from "react";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import pencil from "../../../Assets/images/pencil.svg";
import upload from "../../../Assets/images/upload.svg";
import bag from "../../../Assets/images/bag.svg";
import greentick from "../../../Assets/images/greentick.svg";
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    p: true;
  }
}

interface placeabidprops {
  value?: number;
  children?: JSX.Element | JSX.Element[] | string[];
  title?: string;
  ETHone?: string | number;
  ETH2two?: string | number;
  modalhead1?: string;
  modalpara1?: string;
  modalnum?: number | string;
  modalpara2?: string;
  totalETH?: number;
  ETH1?: number | string;
  BoxText1?: string;
  ETH2?: number | string;
  BoxText2?: string;
  ETH3?: number | string;
  BoxText3?: string;
  head?: string;
  subhead1?: string;
  subhead2?: string;
  subhead3?: string;
  smalltext1?: string;
  smalltext2?: string;
  smalltext3?: string;
  bidcard?: boolean;
  logo?: string;
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
  px: 3,
  pb: 3,
  backgroundColor: "#FCFCFD",
  borderRadius: "10px",
};

const PlaceaBidModals = (props: placeabidprops) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [modal1, setModal1] = React.useState<boolean>(true);
  const [modal2, setModal2] = React.useState<boolean>(false);

  const [style1, setStyle1] = useState("startnowbtn");
  const [style2, setStyle2] = useState("startnowbtn");
  const [style3, setStyle3] = useState("startnowbtn");

  const [active1, setActive1] = React.useState<boolean>(true);
  const [active2, setActive2] = React.useState<boolean>(true);
  const [active3, setActive3] = React.useState<boolean>(true);

  const [buttonText1, setButtonText1] = useState<string>("Start now");
  const [buttonText2, setButtonText2] = useState<string>("Start now");
  const [buttonText3, setButtonText3] = useState<string>("Start now");

  const handleClick1 = () => {
    setStyle1("mybtn");
    setActive1(false);
    setButtonText1("done");
  };
  const handleClick2 = () => {
    setStyle2("mybtn");
    setActive2(false);
    setButtonText2("done");
  };
  const handleClick3 = () => {
    setStyle3("mybtn");
    setActive3(false);
    setButtonText3("done");
  };
  const handleOpenModal1 = () => {
    setModal1((modal1) => true);
    setModal2((modal2) => false);
  };

  const handleOpenModal2 = () => {
    setModal2((modal2) => true);
    setModal1((modal1) => false);
  };
  return (
    <>
      {props.bidcard ? (
        <Button onClick={handleOpen} variant="contained" className="mybutton">
          Place a bid <img src={props.logo} alt="icon" className="bigiImg" />
        </Button>
      ) : (
        <ButtonComponent
          handleClick={handleOpen}
          styleType="outline"
          classNames="ItemWhiteBtn"
        >
          Place a bid
        </ButtonComponent>
      )}

      {modal1 ? (
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
              <Typography variant="h4" component="div">
                {props.modalhead1 ? props.modalhead1 : "Place a bid"}
              </Typography>
              <img
                className="crossimg"
                onClick={handleClose}
                src={cross}
                alt="img"
              />
            </Box>
            <Typography component="div" className="para1">
              {props.modalpara1
                ? props.modalpara1
                : "   You are about to purchase C O I N Z from UI8"}
            </Typography>
            <Typography component="div" variant="h6">
              {props.modalpara2 ? props.modalpara2 : "Your bid"}
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
                {props.modalnum ? props.modalnum : "0.007"}
              </Typography>
              <Box sx={{ display: "flex" }}>
                <input
                  type="text"
                  style={{
                    direction: "rtl",
                    border: "none",
                    fontWeight: "bold",
                    outline: "none",
                  }}
                />
                <Typography variant="h6" component="div">
                  {props.totalETH ? props.totalETH : "ETH"}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <Typography variant="p" color="#777E90" component="div">
                {props.BoxText1 ? props.BoxText1 : " Your balance"}
              </Typography>
              <Typography variant="h6" component="div">
                {props.ETH1 ? props.ETH1 : "8.498"} ETH
              </Typography>
            </Box>
            <Box
              sx={{
                justifyContent: "space-between",

                display: "flex",
              }}
            >
              <Typography variant="p" color="#777E90" component="div">
                {props.BoxText2 ? props.BoxText2 : "Service fee"}
              </Typography>
              <Typography variant="h6" component="div">
                {props.ETH2 ? props.ETH2 : "0"} ETH
              </Typography>
            </Box>
            <Box
              sx={{
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <Typography variant="p" color="#777E90" component="div">
                {props.BoxText3 ? props.BoxText3 : " Total bid amount"}
              </Typography>
              <Typography variant="h6" component="div">
                {props.ETH3 ? props.ETH3 : "0"} ETH
              </Typography>
            </Box>

            <Box className="buttonBox">
              <Button
                onClick={handleOpenModal2}
                className="px-4 me-3 rounded-pill startnowbtn"
              >
                I Understand ,continue
              </Button>

              <Box className="cancelbtnbox">
                <Button className=" rounded-pill cancelbtn">cancel</Button>
              </Box>
            </Box>
          </Box>
        </StyledModal>
      ) : modal2 ? (
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
              <Typography variant="h4" gutterBottom component="div">
                {props.head ? props.head : "Follow steps"}
              </Typography>
              <img
                className="crossimg"
                src={cross}
                alt="img"
                onClick={handleClose}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                marginTop: "35px",
              }}
            >
              {active1 ? (
                <img src={upload} alt="img" />
              ) : (
                <img src={greentick} alt="img" />
              )}

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "30px",
                }}
              >
                <Typography component="div" variant="h6" className="subhead">
                  {props.subhead1 ? props.subhead1 : "Deposit ETH"}
                </Typography>
                <Typography
                  component="div"
                  className="subtext"
                  color="text.secondary"
                >
                  {" "}
                  {props.smalltext1
                    ? props.smalltext1
                    : "Send transaction with your wallet"}
                </Typography>
              </Box>
            </Box>

            <Box>
              <Button className={style1} onClick={handleClick1}>
                {buttonText1}
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                marginTop: "35px",
              }}
            >
              {active2 ? (
                <img src={pencil} alt="img" />
              ) : (
                <img src={greentick} alt="img" />
              )}

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "30px",
                }}
              >
                <Typography component="div" variant="h6" className="subhead">
                  {props.subhead1 ? props.subhead1 : "Approve"}
                </Typography>
                <Typography
                  component="div"
                  color="text.secondary"
                  className="subtext"
                >
                  {" "}
                  {props.smalltext2
                    ? props.smalltext2
                    : " Checking balance and approving"}
                </Typography>
              </Box>
            </Box>
            <Button className={style2} onClick={handleClick2}>
              {buttonText2}
            </Button>

            <Box
              sx={{
                display: "flex",
                marginTop: "35px",
              }}
            >
              {active3 ? (
                <img src={bag} alt="img" />
              ) : (
                <img src={greentick} alt="img" />
              )}

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "30px",
                }}
              >
                <Typography component="div" variant="h6" className="subhead">
                  {props.subhead1 ? props.subhead1 : " Signature"}
                </Typography>
                <Typography
                  component="div"
                  color="text.secondary"
                  className="subtext"
                >
                  {props.smalltext3
                    ? props.smalltext3
                    : "Create a signature to place a bit"}
                </Typography>
              </Box>
            </Box>
            <Button onClick={handleClick3} className={style3}>
              {buttonText3}
            </Button>
          </Box>
        </StyledModal>
      ) : null}
    </>
  );
};

export default PlaceaBidModals;
