import { Container,Grid , Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react';
// import ButtonComponent from '../../Components/ButtonComponent/ButtonComponent';
import Textfield from '../../Components/Textfield/TextField';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import './SingleCollectible.css';
import circle from '../../Assets/images/user1.png';
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';
// import Newbidcard from '../../Components/Bidcard/Newbidcard';

export default function SingleCollectible() {
   
    
    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
        '&:active': {
          '& .MuiSwitch-thumb': {
            width: 15,
          },
          '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
          },
        },
        '& .MuiSwitch-switchBase': {
          padding: 2,
          '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
              opacity: 1,
              backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
            },
          },
        },
        '& .MuiSwitch-thumb': {
          boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
          width: 12,
          height: 12,
          borderRadius: 6,
          transition: theme.transitions.create(['width'], {
            duration: 200,
          }),
        },
        '& .MuiSwitch-track': {
          borderRadius: 16 / 2,
          opacity: 1,
          backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
          boxSizing: 'border-box',
        },
      }));
    const styleDirection={
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    }
    const styleCol={
        display:'flex',
        flexDirection:'column'
    }
    
  return (
    <>
    <Container>
      <Grid container spacing={2} className='mt-5'>
        <Grid item xs={6} md={8}>
            <Box sx={styleDirection}>
            <Box>
            <Typography variant='h4'>Create single collectible</Typography>
            </Box>
            <Box>
            {/* <ButtonComponent
                btnColor={"#23262F"}
                styleType={"outline"}
                classNames={"p-2 rounded-pill"}
              >
               Switch to Multiple
              </ButtonComponent> */}
            </Box>
            </Box>
            <Box sx={styleCol}>
                <Typography variant='p' className="changeFont">
                Upload file
                </Typography>
                <Typography variant='p' className="font1">
                Drag or choose your file to upload
                </Typography>
               

                
            </Box>
            <Box>
                <Textfield />
            </Box>
            <Box sx={styleDirection} className='paddingChange'>
                <Box sx={styleCol}>
                    <Typography variant='p' className="changeFont">
                    Put on sale
                    </Typography>
                    <Typography variant='p' className="font1">
                    You’ll receive bids on this item
                    </Typography>
                </Box>
                <Box >
                <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                </Box>
            </Box>
            <Box sx={styleDirection} className='paddingChange'>
                <Box sx={styleCol}>
                    <Typography variant='p' className="changeFont">
                    Instant sale price
                    </Typography>
                    <Typography variant='p' className="font1">
                    Enter the price for which the item will be instantly sold
                    </Typography>
                </Box>
                <Box >
                <AntSwitch  inputProps={{ 'aria-label': 'ant design' }} />
                </Box>
            </Box>
            <Box sx={styleDirection} className='paddingChange'>
                <Box sx={styleCol}>
                    <Typography variant='p' className="changeFont">
                    Unlock once purchased
                    </Typography>
                    <Typography variant='p' className="font1">
                    Content will be unlocked after successful transaction
                    </Typography>
                </Box>
                <Box >
                <AntSwitch  inputProps={{ 'aria-label': 'ant design' }} />
                </Box>
            </Box>
            <Box sx={styleDirection} className='paddingChange'>
                <Box sx={styleCol}>
                    <Typography variant='p' className="changeFont">
                    Choose collection
                    </Typography>
                    <Typography variant='p' className="font1">
                    Choose an exiting collection or create a new one
                    </Typography>
                </Box>
                
            </Box>
            <Grid container columns={{ xs: 4, md: 12 }} spacing={2}>
                <Grid item md={3}>

            <Box sx={styleCol} className='bgColor' >
                <img src={circle} className='imFluid'/>
                <Typography variant='p'>
                Create collection
                </Typography>
            </Box> 
                </Grid>
                <Grid item md={3}>

<Box sx={styleCol} className='bgColor' >
    <img src={circle} className='imFluid'/>
    <Typography variant='p'>
    Crypto Legend - Professor
    </Typography>
</Box> 
    </Grid>
    <Grid item md={3}>

<Box sx={styleCol} className='bgColor' >
    <img src={circle} className='imFluid'/>
    <Typography variant='p'>
    Crypto Legend - Professor
    </Typography>
</Box> 
    </Grid>
    <Grid item md={3}>

<Box sx={styleCol} className='bgColor' >
    <img src={circle} className='imFluid'/>
    <Typography variant='p'>
    Legend Photography
    </Typography>
</Box> 
    </Grid>
            </Grid>
            <Box sx={styleDirection} className='paddingChange'>
            <Box>
            {/* <ButtonComponent btnColor={"#3772FF"} classNames={"p-3"}>
             Create Multiple <ArrowRightAltSharpIcon></ArrowRightAltSharpIcon>
              </ButtonComponent> */}
              </Box>
              <Box>
                  <Typography variant='p'>
                      Auto Saving
                  </Typography>
              </Box>
              </Box>
        </Grid>
        <Grid item xs={6} md={4}>
       
        </Grid>
      </Grid>
    </Container>

    </>
  )
}
