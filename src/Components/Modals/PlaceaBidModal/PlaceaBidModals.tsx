import Box from "@mui/material/Box";
// import "../BidModal/Modals/modal.css";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import cross from "../../../Assets/images/cross.svg";
import React, { useState } from "react";

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
  return (
    <>
      <Button onClick={handleOpen}>modal</Button>
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
            <Typography variant="h6" component="div">
              {props.totalETH ? props.totalETH : "ETH"}
            </Typography>
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
            <Button className="px-4 me-3 rounded-pill startnowbtn">
              I Understand ,continue
            </Button>
            <Box className="cancelbtnbox">
              <Button className=" rounded-pill cancelbtn">cancel</Button>
            </Box>
          </Box>
        </Box>
      </StyledModal>
    </>
  );
};

export default PlaceaBidModals;
