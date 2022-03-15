import React, { useState } from "react";
import { Typography,Button,Box } from "@mui/material";
import { styled } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import cross from "../../../Assets/images/cross.svg";
import { Link } from "react-router-dom";
import purple_icon from "../../../Assets/images/purple_icon.svg";
import ButtonComponent from "../../../Components/ButtonComponent/ButtonComponent";
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
  px: 3,
  pb: 3,
  backgroundColor: "#FCFCFD",
  borderRadius: "10px",
};
const ConnectWalletModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <ButtonComponent
        handleClick={handleOpen}
        classNames="ButtonClass"
        btnColor={"#3772FF"}
      >
        Place a Bid
      </ButtonComponent>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <Box sx={{ width: "330px" }}>
            <Box className="crossimg">
              <img onClick={handleClose} src={cross} alt="img" />
            </Box>

            <Box className="modal3">
              <img onClick={handleClose} src={purple_icon} alt="img" />

              <Typography variant="p" className="para1" component="div">
                You need to connect your wallet first to sign messages and send
                transaction to Ethereum network
              </Typography>

              <Box className="buttonBox">
                <Link to="/connect-wallet" className="linkUnderline">
                <Button
                  className="px-4 me-3 rounded-pill startnowbtn"
                >
                  Connect wallet
                </Button>
                </Link>
                <Box className="cancelbtnbox">
                  <Button className="rounded-pill cancelbtn">cancel</Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </StyledModal>
    </>
  );
};

export default ConnectWalletModal;
