
import React,{ useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import "./CreatorsBid.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container,Divider } from "@mui/material";
import card1 from '../../Assets/images/HomeImg.png';
import disIcon from '../../Assets/images/disIcon.svg';
import r from '../../Assets/images/plus1.svg';
import user1 from '../../Assets/images/user1.png';
import CreatorsS2 from "./CreatorsS2";
import data from './CreatorsArray';
import Data from "./CreatorsArray3";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import CreatorsS3 from "./CreatorsS3";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const styleBT={
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems:'center',
}

export default function CreatorsBid() {
  const [show, setShow] = React.useState(false);
    
    const handleMouseOver = () => {
        setShow(true);
    };
    const handleMouseOut = () => {
        setShow(false);
    };
  return (
    <>
    <Container>
        <Grid container spacing={3} sx={{margin:'30px 0px '}}>
           <Grid item  md={4} sm={12}>
           <Box className="container" onClick ={()=>{window.location.href='/item'}}>
             <Box className="birdImg">
             <img className="changeWidth1 image" src={card1} />
             </Box>
               <Box className="middle">
                 <img src={r} className="text"/>
               </Box>
             <Box sx={styleBT}>
                <Box sx={styleBT}>
                  <Box>
                <img width={50} style={{ marginTop: "10px"}} src={user1} />
                </Box>
                <Box sx={{padding:'0px 10px'}}>
               <Typography
                 sx={{ fontSize: "14px" }}>
                 The Future of ETH®
               </Typography>
               <Typography>
                   18 in stock
               </Typography>
               </Box>
               </Box>
               <Box>
               <Typography>
                   Highest bid
               </Typography>
               <Typography className="priceBor">1.124 ETH</Typography>
               </Box>
             </Box>
           </Box>
           </Grid>
           <Grid item md={5} >
           {data.map((item,index) => (
             <CreatorsS2 CreatorsArray={item} key={item.id} />
      ))}   
         </Grid>
         <Grid item md={3}>
         <Typography className="fontC5">
         Latest upload from creators 🔥
         </Typography>
         <Box>
         {Data.map((item) => (
             <CreatorsS3 CreatorsArray3={item} key={item.id} />
          ))}   
      
         </Box>
         <ButtonComponent
                btnColor={"#23262F"}
                styleType={"outline"}
                classNames="StyleDis"
                handleClick={()=>{window.location.href ='/searchfilter'}}
              >
               <span>Discover more<img src={disIcon} /> </span>
              </ButtonComponent>
         </Grid>
        </Grid>
    </Container>
    </>
  )
}
