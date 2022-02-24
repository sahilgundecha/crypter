import React from "react";
import Box from "@mui/material/Box";
import { Container, Slider } from "@mui/material";
import "./slider.css";
import { Typography } from "@mui/material";

function valuetext(value: number) {
  return `${value}ETH`;
}
interface sliderprops {
  value: number;
  children: string[];
}

const SliderComponent = () => {
  return (
    <>
      <Container>
        <Box sx={{ width: "300px", padding: "10px 0px" }}>
          <Typography className="text">
            {/* {props.title ? props.title : "PRICE RANGE"} */}
            PRICE RANGE
          </Typography>
          <Slider
            sx={{
              width: "290px",
              height: "10px",
            }}
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
            // getAriaValueText={valueLabelFormat}
            valueLabelFormat={valuetext}
            min={0}
            max={10}
            step={1}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography className="sliderText">
              {/* {props.ETH1 ? props.ETH1 : "0.01ETH"} */}
              0.01ETH
            </Typography>
            <Typography className="sliderText">
              {/* {props.ETH2 ? props.ETH2 : "10ETH"} */}
              10ETH
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default SliderComponent;
