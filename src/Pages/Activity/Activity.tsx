import React from 'react'
import { Container ,Box, Typography,Grid, Divider, Button,Card, Paper } from '@mui/material'
import './Activity.css';
import { cardData } from './ActivityArray';
import { Notification } from '../../Components/Notification/NotificationD';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import buffer from "../../Assets/images/buffer.svg";


const boxStyle={
    display:'flex',
    justifyContent:'space-between',
    padding:'10px',
    margin:'7px 120px'
  }
  const boxStyle1={
    display:'flex',
    justifyContent:'space-between'
  }

  const textStyle={
    textDecoration:'none',
    color:'#777E90',
    marginRight:'10px',
    cursor:'pointer',
    fontSize:'15px'
  }
  const fBold={
      fontWeight:'bold'
  }
export default function Activity() {
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
    <Container className="changeTop">
        <Grid container >
            <Grid item md={7}>
                <Box sx={boxStyle1}>
                    <Typography variant='h4' sx={fBold}>Activity </Typography>
                    <Button variant='outlined'>Mark all as read</Button>
                </Box>
                <Box>
                <Notification colData={cardData}  />
                </Box>
                <Box className='imgBox'>
                <img src={buffer} className='imgCenter' />
                </Box>
            </Grid>
            <Grid item md={1}></Grid>
            <Grid item md={4}>
                <Paper className="stylePaper">
                    <Typography variant='h6' sx={fBold}>
                        Filters
                    </Typography>
                    <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Sales" />
                    <FormControlLabel control={<Checkbox />} label="listings" />
                    <FormControlLabel control={<Checkbox  />} label="Bids" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Burns" />
                    <FormControlLabel control={<Checkbox />} label="Followings" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Likes" />
                    <FormControlLabel control={<Checkbox  />} label="Purchase" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Transfers" />
                    </FormGroup>
                    <Divider />
                    <Box sx={{margin:'10px 10px'}}>
                    <Button variant='outlined'>Select all</Button>
                    <Button variant='outlined'>Unselect all</Button>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    </Container>
    </>
  )
}
