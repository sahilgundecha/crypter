import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import userHome from "../../Assets/images/userHome.png";
import Home1 from "../../Assets/images/home1.png";
import r from "../../Assets/images/r.svg";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
interface Props {
  CreatorsArray: any;
}
const styleStack = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
};
const CreatorsS2: React.FC<Props> = ({ CreatorsArray }) => {
  const [show, setShow] = React.useState(true);

  const handleMouseOver = () => {
    setShow(false);
  };
  const handleMouseOut = () => {
    setShow(true);
  };
  return (
    <>
      <Box
        sx={styleStack}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={() => {
          window.location.href = "/item";
        }}
      >
        <Box>
          {show ? (
            <img className="widthmax" src={Home1} />
          ) : (
            <img className="widthmax" src={r} />
          )}
        </Box>
        <Box sx={{ margin: "15px 12px" }}>
          <Typography className="fontC4">{CreatorsArray.title}</Typography>
          <Box sx={styleStack} className="changeM">
            <img className="moveRight" src={CreatorsArray.img1} />
            <img className="moveRight" src={CreatorsArray.img2} />
            <Typography className="priceBor moveRight">
              {" "}
              {CreatorsArray.price} ETH
            </Typography>
            <Typography className="moveRight fontC5">
              {CreatorsArray.item}
            </Typography>
          </Box>
          <Box>
            <ButtonComponent
              btnColor={"#23262F"}
              styleType={"outline"}
              classNames="borderC"
            >
              Place a bid
            </ButtonComponent>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CreatorsS2;
