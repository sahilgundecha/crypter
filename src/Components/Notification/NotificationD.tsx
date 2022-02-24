import React from 'react';
import { Box, Button, Card, Container, Typography } from '@mui/material'
import './Notification.css';
import dot from '../../Assets/images/dot.png';
import { cardData } from './NotificationArray';

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
      ethPrice:string
      ethRecieved:string
      days:string
      }[]
       }
    };

export const NotificationD = () => {
  return (
    <>
    <Card className="card" sx={{ borderRadius:'25px'}}>
        <Box sx={styleFlex}>
            <Typography variant="h5">Notification</Typography>
                <Button variant="contained">See All</Button>
        </Box>
           <Notification colData={cardData} /> 
    </Card>
</>
  )
}

const Notification = (props: cardProps) => {
    const {cardIt} = props.colData;
return(
    <div>{
        cardIt.map((props) =>{
          return(
            <>
            <Box sx={styleRow} key={props.id}>
                <img className="change1" src={props.mainImg} />
                <Box sx={{marginLeft:'20px'}}>
                <Typography>{props.ethPrice}</Typography>
                <Typography className="ChangeFont">{props.ethRecieved}</Typography>
                <Typography className='textDark'>{props.days}</Typography>
                
                </Box>
                <Box sx={styleEnd}>
                    <img className="change" src={dot} />
            </Box>
            </Box>     
            </>
        )}
        )}
        </div>
)
}

