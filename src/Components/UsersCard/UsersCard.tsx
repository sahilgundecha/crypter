import React from 'react'
import {Grid,Button, Typography, Avatar} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import { borderRadius } from '@mui/system';
import twitterIcon from "../../Assets/images/twitterIcon.png";
import fbIcon from "../../Assets/images/fbIcon.png";
import instaIcon from "../../Assets/images/instaIcon.png";
import shareIcon from "../../Assets/images/share icon.png";
// import GlobeIcon from "../../Assets/images/globeIcon.png";
import {userInfo} from "../../Components/FollowersCard/FollowersCardData";
import smallCoin from "../../Assets/images/icons-Coins-Filled.svg";
import shareDotIcon from "../../Assets/images/share-icon.svg";
import Link from '@mui/material/Link';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';

interface userCardDetails{
    
    user:{
        img: string,
    name: string,
    text:string,
    description:string,
    link:string,
    memberShip:string
    }
}

const useStyles: any = makeStyles( () => ({
    root: {
         border: `0.5px solid ${useTheme().palette.grey[300]}`,
         padding: useTheme().spacing(2),
        borderRadius: "16px",
        maxWidth: 220,
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.5)",
        height: 600
    },
    avatar:{
        width: useTheme().spacing(14) + "!important",
        height: useTheme().spacing(14) + "!important"
    },
    nameStyle:{
        fontSize: "21px !important",
        fontWeight: "600 !important",
        marginTop: "20px !important"
    },
    descriptionStyle:{
        fontSize: "12px !important",
        color: "#777E90",
        width: "160px",
        textAlign: 'center',
        marginTop: useTheme().spacing(3) + "!important",
        marginBottom: useTheme().spacing(2) + "!important"
    },
    uploadBtn:{
        textTransform:"none",
        paddingRight: useTheme().spacing(2) + "!important",
        paddingLeft: useTheme().spacing(2) + "!important",
        borderRadius: "16px !important",
        backgroundColor: "#3772FF",
        '&:hover': {
            backgroundColor: '#63ADF7 !important',
        },

    },
    iconbox:{
        display:"flex",
        marginTop: useTheme().spacing(3),
        marginBottom: useTheme().spacing(4),
        

    },
    iconStyle:{
        width:"18px",
        height:"18px",
        margin: "10px",
        cursor: "default",
        '&:hover': {
            opacity:"0.6",
            cursor: "pointer",
            
        },
    },
    ShareIcon:{
        width:"35px",
        height:"35px",
        marginLeft: "10px",
        '&:hover': {
            opacity:"0.6",
            cursor:"pointer",
        },
    },
    membershipText:{
        fontSize:"12px !important",
        color:"#777E90",
        marginTop:"40px !important"
    },
    GlobeIconStyle:{
        fontSize:"17px !important",
        marginRight:"8px",
        marginBottom:"4px",
        color:"474748"
    },
    linkStyles:{
        fontSize:"14px",
        opacity:"0.9"
    },
    linkMargin:{
        marginBottom:"50px"
    }
}))
export const UsersCard = () => {
    const classes = useStyles();
  return (
    <Grid container direction="column"
    alignItems='center'
    className={classes.root} >
        <FollowersPhoto  user={userInfo}/>
        <FollowersName  user={userInfo}/>
        <FolwersRandomText  user={userInfo}/>
        <FDescription  user={userInfo}/>
        <LinkWithImg  user={userInfo} />
        <UploadButtons />
        <SocialMediaIcon />
        <MembershipCard  user={userInfo}/>
    </Grid>
  );
};
const FollowersPhoto = (props:userCardDetails) => {
    return(
        <Avatar
            alt="Nat Geo"
            className={useStyles().avatar}
            src={props.user.img}
        />
    )
}
const FollowersName = (props: userCardDetails) => {
    return(
    <Grid container justifyContent="center" alignItems='center'>
        
     <Typography variant="body2" className={useStyles().nameStyle}>{props.user.name}</Typography>

    </Grid>)
}
const FolwersRandomText = (props: userCardDetails) => {
    return(
        <Grid container justifyContent="center" alignItems='center'>
        
        <Typography variant="body2" className={useStyles().linkStyles}>{props.user.text}</Typography>
        <img style={{marginLeft: "10px"}} src={smallCoin}/>
   
       </Grid>
    )
}
const FDescription = (props: userCardDetails) => {
    return(
    <Grid container justifyContent="center" alignItems='center'>
        <Typography className={useStyles().descriptionStyle}>
        {props.user.description}
        </Typography>
    </Grid>
    )
};
const LinkWithImg = (props:userCardDetails) => {
    return(
        <Grid container justifyContent="center" alignItems='center' className={useStyles().linkMargin}>
           <Link href={props.user.link} sx={{color:"#5B5959"}} variant="body2" underline='none'> <LanguageSharpIcon
            className={useStyles().GlobeIconStyle} /><span className={useStyles().linkStyles}>{props.user.link}</span></Link>
        </Grid>
    )
}
const UploadButtons = () => {
    return(
        <Grid>
        <Button disableElevation variant="contained" size="small" className={useStyles().uploadBtn} > Upload</Button>
        <img src={shareIcon}  className={useStyles().ShareIcon}/>
        <img src={shareDotIcon} className={useStyles().ShareIcon}/>

        </Grid>
    )
};
const SocialMediaIcon = () => {
    return(
        <Grid className={useStyles().iconbox} >
            <img className={useStyles().iconStyle} src={twitterIcon}/>
            <img className={useStyles().iconStyle} src={instaIcon}/>
            <img className={useStyles().iconStyle} src={fbIcon}/> 
        </Grid>
    )
}
const MembershipCard = (props:userCardDetails) => {
    return(
        <Grid container justifyContent="center" alignItems='center'>
        <Typography className={useStyles().membershipText}>
        {props.user.memberShip}
        </Typography>
    </Grid>
    )
}