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
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
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
const handleCrypter = () => {
  window.location.href = "/Crypter";
}
const handleSingle= () => {
  window.location.href = "/SingleCollectible";
}
const textStyle={
  textDecoration:'none',
  
  marginRight:'10px',
  fontWeight:'bold',
  cursor:'pointer',
  fontSize:'14px'
}
export default function () {
  return (
    <>
    
   <Box sx={boxStyle}>
         <Box>
         <ButtonComponent
                btnColor={"#23262F"}
                styleType={"outline"}
                handleClick={handleCrypter}
                classNames="buttonStyle"
              >
                <span><KeyboardBackspaceIcon></KeyboardBackspaceIcon>Back to Home</span>
              </ButtonComponent>
         </Box>
         <Box className="lineStyle">
             <Typography component="a" sx={textStyle} className='homeStyle'>
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
        <ButtonComponent
                btnColor={"#23262F"}
                styleType={"outline"}
                classNames="buttonStyle1"
                handleClick={handleSingle}
              >
               Create Single
              </ButtonComponent>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={cardStyle} className="cardHover">
      <CardActionArea>
       <img className="imgFuild" src={card2} />
        <CardContent>
        <ButtonComponent
                btnColor={"#23262F"}
                styleType={"outline"}
                classNames="buttonStyle1"
                handleClick={handleSingle}
              >
               Create Mutiple
              </ButtonComponent>
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
