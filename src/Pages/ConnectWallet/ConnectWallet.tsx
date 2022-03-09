
import React, { useState } from 'react'
import { Container, Typography,Box, Divider,Grid } from '@mui/material';
import './ConnectWallet.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import WalletCard from '../../Components/WalletCard/WalletCard';
import WalletName from './WalletName';
import card1 from '../../Assets/images/upload1.png';
import Right from "../../Assets/images/Righticon.svg";
import icon1 from '../../Assets/images/icon1.svg';
import icon2 from '../../Assets/images/icon2.svg';
import icon4 from '../../Assets/images/icon3.svg';
import icon3 from '../../Assets/images/icon.svg';
import QR from '../../Assets/images/QRCode.png';
import QR1 from '../../Assets/images/QRCode1.svg';
import Wallet from '../../Assets/images/Wallet.png';
import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export const ConnectWallet:React.FC = () => {

   const [Display, setDisplay] = useState(true)
   const [CImg, setCImg] = React.useState(false);
   const [Dnone, setDnone] = React.useState(false);
   const [showB, setshowB] = React.useState(true);


   
   const handle1= () =>{
     setDisplay(false)
     setDnone(false)
   }
   const handle2 = () => {
     console.log('scdc')
    setCImg(true)
   }
  

   const displayBlock = () => {
     setDnone(true)
     setDisplay(true)
     setshowB(false)
   }


  return (
    <>
      <Container>
          <Box>
              <Typography className="styleHead">
              <span className="marginC1" onClick={()=>{window.location.href = './Crypter'}}> <KeyboardBackspaceIcon></KeyboardBackspaceIcon></span>Connect your wallet
              </Typography>
              <Divider />
          </Box>
          <Grid container sx={{margin:"50px 0px",display:'flex',alignItems:'center'}}>
              <Grid item md={6} spacing={3}>
              <Box >
                  <WalletName />
                  <WalletName title="Coinbase wallet" img={icon1} Cimg={Right} onClick={() => {handle1();}}  onClick1={() => {handle2();}}/>
                  <WalletName title='MyEtherWallet' img={icon2} />
                  <WalletName title="Wallet Connect" img={icon4} />   
              </Box>
          </Grid>
          <Grid item md={5}>
            {Display?
            <Box sx={{display:showB ? 'block' : 'none'}} className='DNone'>
                   <img className="imgC1" src={QR} /> 
             </Box>
             :
             <Box className="CNone">
               <Typography className="fontC2">
                 Scan to connect
               </Typography>
               <Typography className="fontC3">
               Powered by UI8.Wallet
               </Typography>
               <img  src={QR1} />
               <Box sx={{margin:'10px 0px'}}>
               <ButtonComponent
                btnColor={"#23262F"}
                styleType={"outline"}
                classNames="changeDo"
                handleClick={displayBlock}
              >
               Don't have wallet app?
              </ButtonComponent> 
              </Box>
             </Box>}
            {Dnone?
             <Box>
               <Typography className="fontC2">
                 Terms of Service
               </Typography>
               <Typography className="fontC3">
               Please take a few minutes to read and understand <span className="colorB">Stacks Terms of Service</span>. To continue, you’ll need to accept the terms of services by checking the boxes.
               </Typography>
               <img  src={Wallet} />
               <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="I am at least 13 year old" />
                <FormControlLabel control={<Checkbox/>} label="I agree Stack terms of service" />
                </FormGroup>
                <Box sx={{margin:'20px 0px'}}>
                <ButtonComponent  styleType={"outline"}  btnColor={"#23262F"} classNames='changeWallet1'>cancel</ButtonComponent>
                <ButtonComponent  btnColor={"#3772FF"} classNames='changeWallet'>Get started now</ButtonComponent>
                </Box>
                </Box>:null}
      
          </Grid>
          </Grid>
      </Container>
    
    </>
  )
}
