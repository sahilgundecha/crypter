import { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import purple_icon from "../../Assets/images/purple_icon.svg";
import Right from "../../Assets/images/Righticon.svg";
import { Typography, Box } from "@mui/material";
import "./ConnectWallet.css";

export default function WalletName(props: any) {
  const [show, setShow] = useState(false);
  const [CImg, setCImg] = useState(true);
  const handleMouseOver = () => {
    setShow(true);
  };
  const handleMouseOut = () => {
    setShow(false);
  };

  const handleBox = () => {
    setCImg(true);
  };
  return (
    <>
      <Box onClick={props.onClickBox ? props.onClickBox : handleBox}>
        <Box
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={props.onClick ? props.onClick : null}
          className="walletStyle impHover"
        >
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <img
              width={50}
              src={CImg ? (props.img ? props.img : purple_icon) : Right}
              alt="img"
            />
            <Typography className="fontC1">
              {props.title ? props.title : "Formatic"}
            </Typography>
          </Box>
          <Box style={{ display: show ? "block" : "none" }}>
            <ArrowRightAltIcon></ArrowRightAltIcon>
          </Box>
        </Box>
      </Box>
    </>
  );
}
