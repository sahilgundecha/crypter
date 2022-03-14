import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { borderBottom, styled } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import cross from "../../../Assets/images/cross.svg";
import doller_img from "../../../Assets/images/doller_img.svg";
import { Switch } from "@mui/material";

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

interface PutOnScaleprops {
  children?: JSX.Element | JSX.Element[] | string[];
}

const PutOnScale = (props: PutOnScaleprops) => {
  const [open, setOpen] = React.useState<boolean>(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        className="px-4 me-3 rounded-pill startnowbtn"
        onClick={handleOpen}
      >
        open modal
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
            <Typography variant="h4" gutterBottom component="div">
              Put on sale
            </Typography>
            <img
              className="crossimg"
              src={cross}
              onClick={handleClose}
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
            <img src={doller_img} alt="img" />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "30px",
              }}
            >
              <Typography component="div" variant="h6" className="subhead">
                Instant sale price
              </Typography>
              <Typography
                component="div"
                className="subtext"
                color="text.secondary"
              >
                Enter the price for which the item will be instanly sold
              </Typography>
            </Box>
            <Switch />
          </Box>
          <Box
            sx={{
              justifyContent: "space-between",
              borderBottom: "1px solid gray",
              display: "flex",
              margin: "15px 0px",
            }}
          >
            <Typography variant="h6" component="div" color="#777E90">
              Enter your price
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
              Service fee
            </Typography>
            <Typography variant="h6" component="div">
              1.5%
            </Typography>
          </Box>
          <Box
            sx={{
              justifyContent: "space-between",

              display: "flex",
            }}
          >
            <Typography variant="p" color="#777E90" component="div">
              Total bid amount
            </Typography>
            <Typography variant="h6" component="div">
              0 ETH
            </Typography>
          </Box>
          <Box className="buttonBox">
            <Button className="px-4 me-3 rounded-pill startnowbtn">
              Continue
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

export default PutOnScale;
