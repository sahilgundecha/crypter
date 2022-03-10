import { Container, Typography,Grid, Divider } from '@mui/material'
import { Box } from '@mui/system'
import card1 from '../../Assets/images/upload1.png';
import React from 'react'
import './CrypterEnd.css'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
const alignBox = {
   display:'flex',
   justifyContent:'center',
   flexDirection:'column',
  padding:'30px 0px'

}
const alignBox1 = {
    display:'flex',
    justifyContent:'center',
   
 
 }
const CrypterEnd = () => {
  return (
    <>
    <Divider />
     <Container>
         <Grid container sx={{margin:'50px 0px'}}>
             <Grid item md={6}>  
         <Box>
             <Box  sx={alignBox}>
                 <Typography className="fontE1">
                 SAVE YOUR TIME WITH STACKS
                 </Typography>
                 <Typography className="fontE2">
                 Earn free crypto with <br></br>Crypter
                 </Typography>
                 <Typography className="fontE3">
                 A creative agency that lead and inspire
                 </Typography>
                 <Box sx={{margin:'10px 0px'}}>
                 <ButtonComponent btnColor={"#3772FF"} classNames="btnStyle1 mR" 
                  handleClick={()=>{window.location.href = './Upload'}}>
            Create item
              </ButtonComponent>
              <ButtonComponent
                btnColor={"#23262F"}
                styleType={"outline"}
                classNames="btnStyle1"
                handleClick={()=>{window.location.href = './Discover'}}
              >
              Discover
              </ButtonComponent>
                    </Box>
             </Box>
             </Box>
             </Grid>
             <Grid item md={6}>
                 <Box sx={alignBox1}>
                     <img src={card1} />
                 </Box>
             </Grid>
         </Grid>
     </Container>

    </>
  )
}
export default CrypterEnd;