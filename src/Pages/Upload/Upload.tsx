import { Container ,Box, Typography,Grid, Divider } from '@mui/material'
// import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent'
import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import card1 from '../../Assets/images/upload1.png';
import card2 from '../../Assets/images/upload2.png';
import './Upload.css';
import { createRoutesFromChildren } from 'react-router-dom';

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
      p : true;
    }
  }

const uploadFlex = {
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'column',
  marginTop:'60px'
}
const ImageFlex = {
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  marginTop:'80px'

}
const boxStyle={
  display:'flex',
  justifyContent:'space-between',
  padding:'10px',
  margin:'7px 120px'
 
}
const cardStyle={
  maxWidth: 345, 
  marginRight:'20px',
  padding:'15px',
  borderRadius:'8px'
}
const textStyle={
  textDecoration:'none',
  color:'#777E90',
  marginRight:'10px',
  cursor:'pointer',
  fontSize:'15px'
}

export default function () {
  return (
    <>
    
   <Box sx={boxStyle}>
         <Box>
         {/* <ButtonComponent
                btnColor={"#23262F"}
                styleType={"outline"}
                classNames={"p-3 rounded-pill"}
              >
                <KeyboardBackspaceIcon></KeyboardBackspaceIcon>Back to Home
              </ButtonComponent> */}
         </Box>
         <Box className="lineStyle">
             <Typography component="a" sx={textStyle}>
                 Home &gt;  
             </Typography>
             <Typography component="p" sx={textStyle}>
              Update Items
             </Typography>
         </Box>
     </Box>
     <Divider />
     <Container>
     <Box sx={uploadFlex}>
         <Typography variant='p' className="updatFont">
             Upload Item
         </Typography>
         <Typography component='p' className="changeColor">
         Choose “Single” if you want your collectible to be one of a kind or “Multiple” if you want to sell one collectible multiple times
         </Typography>
     </Box>
     
       <Grid container sx={ImageFlex}>
     <Card sx={cardStyle} className="cardStyle cardHover" >
      <CardActionArea>
       <img className="imgFuild" src={card1} />
        <CardContent className="textCenter">
      /
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={cardStyle} className="cardHover">
      <CardActionArea>
       <img className="imgFuild" src={card2} />
        <CardContent>
        /
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
     
      <Box sx={uploadFlex}>
        <Typography variant='p' className='changeColor'>
        We do not own your private keys and cannot access your funds without your confirmation.
        </Typography>
        </Box>
    </Container> 
    </>
  )
}
