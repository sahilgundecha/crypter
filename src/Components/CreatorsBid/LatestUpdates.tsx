import { Typography, Divider, Box } from "@mui/material";
import React, { FC } from "react";
import homeS3 from "../../Assets/images/homeS3.png";
interface Props {
  CreatorsArray3: any;
}

const gridStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "10px 0px",
}

const CreatorsS3: FC<Props> = ({ CreatorsArray3 }) => {
  return (
    <>
      <Box
        sx={gridStyle}
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
