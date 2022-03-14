import { Typography, Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import homeS3 from "../../Assets/images/homeS3.png";
import Home1 from "../../Assets/images/home1.png";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
interface Props {
  CreatorsArray3: any;
}

const CreatorsS3: React.FC<Props> = ({ CreatorsArray3 }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "10px 0px",
        }}
      >
        <Box>
          <img src={homeS3} />
        </Box>
        <Box sx={{ margin: "0px 20px" }}>
          <Typography className="fontC4">{CreatorsArray3.title}</Typography>
          <Typography className="fontC4">
            {CreatorsArray3.price} <span className="fontC5">ETH</span>
          </Typography>
        </Box>
      </Box>
      <Divider />
    </>
  );
};
export default CreatorsS3;
