import React from 'react';
import {Avatar, Grid, Typography,Button} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import "./FollowersCard.css";
import img1 from "../../Assets/images/sally-profile-img.png";
import img2 from "../../Assets/images/program cover img-01.png";
import {userData} from "../../Components/TestData/TestData"
import { grid } from '@mui/system';


const useStyles: = makeStyles( () => ({
   profileStyle: {
    margin:"10px",
    textAlign:"center"
   },
   imgStyle:{
       width:"112px",height:"88px",margin:"5px"
    },
    
}))
export const FollowersCard = () => {
    const classes = useStyles();
  return (
    <Grid  className="rootStyle" >
        <UsersPhoto classes={classes} user={userData}/>
    </Grid>
  )
}

const UsersPhoto = (props) => {
return(
    <div>{
        props.user.map((x)=>{
            return(
                <Grid className='followersCardTopBlock'>
                    <Grid className='followersCard_media'>
                <Avatar
            alt="Nat Geo"
            sx={{width:"88px",height:"88px",margin:"14px 20px"}}
            src={x.img}
        />
          <Grid className={props.classes.profileStyle}>
            <Typography sx={{fontSize:"16px",fontWeight:"600", width:"100px"}}>{x.name}</Typography>
            <Typography sx={{fontSize:"12px",color:"#777E90"}}>{x.followers} followers</Typography>
            <Button disableElevation color="primary" variant="contained" sx={{backgroundColor:"#3772FF",fontSize:"11px !important",width:"70px",height:"30px",borderRadius:"30px",marginTop:"12px"}}> Follow</Button>
        </Grid>
        </Grid>
        <div className="followersCardImg_style" >
        <Grid className="coverImgStyle ">
            <img src={x.coverImg1} className={props.classes.imgStyle} />
            <img src={x.coverImg2} className={props.classes.imgStyle}/>
            <img src={x.coverImg3} className={props.classes.imgStyle}/>
            <img src={x.coverImg4} className={props.classes.imgStyle} style={{opacity:"0.5"}}/>
        </Grid>
        </div>
        </Grid>
            )
        })
    }</div>
)
}
// const UsersProfile = (props) => {
//     return(
//         <div>
//             {
//                 props.user.map((x)=>{
//                     return(
//                         <Grid className={props.classes.profileStyle}>
//             <Typography sx={{fontSize:"16px",fontWeight:"600", width:"100px"}}>{x.name}</Typography>
//             <Typography sx={{fontSize:"12px",color:"#777E90"}}>{x.followers} followers</Typography>
//             <Button disableElevation color="primary" variant="contained" sx={{backgroundColor:"#3772FF",fontSize:"11px !important",width:"70px",height:"30px",borderRadius:"30px",marginTop:"12px"}}> Follow</Button>
//         </Grid>
//                     )
//                 })
//             }
//         </div>
//     )
// }
// const CoverImg = (props) => {
//     return(
//         <div>
//             {
//                 props.user.map((x)=>{
//                     return(
//                         <Grid className="coverImgStyle">
//             <img src={x.coverImg} className={props.classes.imgStyle} />
//             <img src={x.coverImg} className={props.classes.imgStyle}/>
//             <img src={x.coverImg} className={props.classes.imgStyle}/>
//             <img src={x.coverImg} className={props.classes.imgStyle}/>
//         </Grid>
//                     )
//                 })
//             }
//         </div>

//     )
// }
