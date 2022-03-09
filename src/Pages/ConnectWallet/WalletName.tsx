import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import purple_icon from "../../Assets/images/purple_icon.svg";
import Right from "../../Assets/images/Righticon.svg";
import { Container, Typography,Box, Divider,Grid } from '@mui/material';
import './ConnectWallet.css'
export default function WalletName(props:any) {

    const [show, setShow] = React.useState(false);
    const [CImg, setCImg] = React.useState(true);
    const handleMouseOver = () => {
        setShow(true);
    };
    const handleMouseOut = () => {
        setShow(false);
    };
   
    const handle3= () =>{
     
      setCImg(true)
    }
  return (
    <>
       <Box onClick={props.onClick1?props.onClick1:handle3} >
       <Box  
       sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:'30px 30px'}}  
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
            onClick={props.onClick?props.onClick:null} className="impHover">
              <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
              <img width={50} src={CImg?(props.img?props.img:purple_icon):(Right)} alt="img" />
              <Typography className='fontC1'>
                  {props.title?props.title:"Formatic"}
              </Typography>
              </Box>
              <Box style={{ display: show ? 
               'block' : 'none' }} >
                 <ArrowRightAltIcon></ArrowRightAltIcon>
              </Box>
          </Box>
       </Box>
         
    </>
  )
}
