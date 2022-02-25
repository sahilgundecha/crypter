import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import "./CardCollection.css";
import Carousel from 'react-material-ui-carousel';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import cardArray from "./CardArray";
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 1, itemsToShow: 1 },
    { width: 1, itemsToShow: 2 },
    { width: 1, itemsToShow: 3 },
    { width: 1, itemsToShow: 4 },
    { width: 1, itemsToShow: 4 },
  ];
const styleRow = {
    display:'flex',
    flexDirection:'row',
    padding:'10px'
}
const styleEnd = 
    {
    display:'flex',
    justifyContent:'end',
    marginLeft:'90px'
}
const styleFlex = {
    display:'flex',
    justifyContent:"space-between"
  }
interface cardProps{
    colData:{
      cardIt:{
        id:number
        mainImg:string
        img1:string
        img2:string
        img3:string
        authorImg:string
        authorName:string
        item:number
      }[]
       }
    };

export const CradCollection = () => {
  return (
    <>
    <Container>
        <Grid>
     <Grid item xs={12} sm={6} md={4}>
    <CardCollect colData={cardArray} />
    </Grid>
    </Grid>
    </Container>
  </>
  )
}

const CardCollect = (props: cardProps) => {
    const {cardIt} = props.colData;
return(
    <div>{
        
        cardIt.map((props) =>{
          return(
            <>
                   
                      <Card  key={props.id}
                        sx={{
                          textAlign: "center",
                          boxShadow: "none",
                          cursor:'pointer'
                        }}
                      >
                        <img className="changeWidth" src={props.mainImg} />
      
                        <Box
                          sx={{
                            marginY: "10px",
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          <Carousel
                            className="diffClass"
                      
                         
                            
                          >
                            <img className="changeWidth1" src={props.img1} />
                            <img className="changeWidth1" src={props.img2} />
                            <img className="changeWidth1" src={props.img3} />
                            <img className="changeWidth1" src={props.img1} />
                            <img className="changeWidth1" src={props.img2} />
                            <img className="changeWidth1" src={props.img3} />
                          </Carousel>
                        </Box>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: "24px",
                              fontWeight: "bold",
                              textAlign: "left",
                              marginLeft: "10px",
                            }}
                            component="p"
                          >
                            Awesome collections
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            margin: "10px",
                          }}
                        >
                          <Typography
                            sx={{ fontSize: "14px" }}
                            variant="h5"
                            component="p"
                          >
                            <img style={{ marginRight: "10px" }} src={props.authorImg} />
                            By {props.authorName}
                          </Typography>
                          <Button variant="outlined">{props.item} items</Button>
                        </Box>
                      </Card>
                    
                 
            
          </>
        )}
        )}
        
        </div>
)
}

