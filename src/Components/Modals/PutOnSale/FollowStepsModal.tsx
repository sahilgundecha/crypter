import { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import greentick from "../../../Assets/images/greentick.svg";
import whiteTick from "../../../Assets/images/whiteTick.svg";
import loading from "../../../Assets/images/loading.svg";
import redcircle from "../../../Assets/images/redcircle.svg";
import CircularProgress from "@mui/material/CircularProgress";

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

const PutOnSale3 = () => {
  const [open, setOpen] = useState<boolean>(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [style1, setStyle1] = useState("startnowbtn");

  const [btn1, setbtn1] = useState<boolean>(true);
  const [btn2, setbtn2] = useState<boolean>(false);
  const [btn3, setbtn3] = useState<boolean>(false);
  const [btn4, setbtn4] = useState<boolean>(false);

  const [btn5, setbtn5] = useState<boolean>(true);
  const [btn6, setbtn6] = useState<boolean>(false);
  const [btn7, setbtn7] = useState<boolean>(false);
  const [btn8, setbtn8] = useState<boolean>(false);

  const handleClick1 = () => {
    setbtn1(false);
    setbtn2(true);
  };

  const handleClick2 = () => {
    setbtn2(false);
    setbtn3(true);
  };
  const handleClick3 = () => {
    setbtn4(true);
    setbtn3(false);
  };

  const handleClick5 = () => {
    setbtn5(false);
    setbtn6(true);
  };
  const handleClick6 = () => {
    setbtn7(true);
    setbtn6(false);
  };
  const handleClick7 = () => {
    setbtn8(true);
    setbtn7(false);
  };
  return (
    <>
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
              marginTop: "35px",
            }}
          >
            {btn1 ? (
              <img src={whiteTick} alt="img" />
            ) : btn2 ? (
              <CircularProgress disableShrink />
            ) : btn3 ? (
              <img src={redcircle} alt="img" />
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
                Approve
              </Typography>
              <Typography
                component="div"
                className="subtext"
                color="text.secondary"
              >
                Approve performing transection using your wallet
              </Typography>
            </Box>
          </Box>

          <Box>
            {btn1 ? (
              <Button className={style1} onClick={handleClick1}>
                Start now
              </Button>
            ) : btn2 ? (
              <Button className={style1} onClick={handleClick2}>
                <img src={loading} alt="img" style={{ height: "25px" }} />
              </Button>
            ) : btn3 ? (
              <Button
                sx={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgb(192, 189, 189)",
                  width: "100%",
                  borderRadius: "25px",
                  marginTop: "20px",
                  color: "#EF466F",
                  textTransform: "none",
                }}
                onClick={handleClick3}
              >
                Failed
              </Button>
            ) : (
              <Button
                sx={{
                  backgroundColor: " rgb(192, 189, 189) ",
                  border: "1px solid  rgb(192, 189, 189)",
                  width: "100%",
                  borderRadius: "25px",
                  marginTop: "20px",
                  color: "#ffffff",
                  textTransform: "none",
                }}
              >
                Done
              </Button>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              marginTop: "35px",
            }}
          >
            {btn5 ? (
              <img src={whiteTick} alt="img" />
            ) : btn6 ? (
              <CircularProgress disableShrink />
            ) : btn7 ? (
              <img src={redcircle} alt="img" />
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
          </Box>
          <Box>
            {btn5 ? (
              <Button className={style1} onClick={handleClick5}>
                Start now
              </Button>
            ) : btn6 ? (
              <Button className={style1} onClick={handleClick6}>
                <img src={loading} alt="img" style={{ height: "25px" }} />
              </Button>
            ) : btn7 ? (
              <Button
                sx={{
                  backgroundColor: "#ffffff",
                  border: "1px solid rgb(192, 189, 189)",
                  width: "100%",
                  borderRadius: "25px",
                  marginTop: "20px",
                  color: "#EF466F",
                  textTransform: "none",
                }}
                onClick={handleClick7}
              >
                Failed
              </Button>
            ) : (
              <Button
                sx={{
                  backgroundColor: " rgb(192, 189, 189) ",
                  border: "1px solid  rgb(192, 189, 189)",
                  width: "100%",
                  borderRadius: "25px",
                  marginTop: "20px",
                  color: "#ffffff",
                  textTransform: "none",
                }}
              >
                Done
              </Button>
            )}
          </Box>
        </Box>
      </StyledModal>
    </>
  );
};

export default PutOnSale3;
