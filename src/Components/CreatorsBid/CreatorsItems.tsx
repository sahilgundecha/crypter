import { Typography, Box } from "@mui/material";
import { FC, useState } from "react";
import Home1 from "../../Assets/images/home1.png";
import right from "../../Assets/images/r.svg";
import "./CreatorsBid.css";
import { Link } from "react-router-dom";
import ButtonComponent from "../../Common/ButtonComponent/ButtonComponent";
interface Props {
  CreatorsArray: any;
}
const styleStack = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
};
const CreatorsS2: FC<Props> = ({ CreatorsArray }) => {
  const [show, setShow] = useState(true);

  const handleMouseOver = () => {
    setShow(false);
  };
  const handleMouseOut = () => {
    setShow(true);
  };
  return (
    <>
      <Link to="/item" className="lineUnderlineS2">
        <Box
          sx={styleStack}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <Box>
            {show ? (
              <img className="widthmax" src={Home1} />
            ) : (
              <img className="widthmax" src={right} />
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
      </Link>
    </>
  );
};

export default CreatorsS2;
