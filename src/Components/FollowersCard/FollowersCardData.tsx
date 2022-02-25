import img2 from "../../Assets/images/sally-profile-img.png";
// import img1 from "../../Assets/images/enrieCole.png";
import img3 from "../../Assets/images/program cover img-01.png";
import imgA from "../../Assets/images/AniyaProfilePic.png";
import imgE from "../../Assets/images/EdwardoProfilePic.png";
import imgR from "../../Assets/images/ReymundoProfilePic.png";
import imgJ from "../../Assets/images/JeanetteProfilePic.png";
import programCover2 from "../../Assets/images/program cover img-02.png";
import programCover3 from "../../Assets/images/program cover img-03.png"
// import programCover4 from "../../Assets/images/program cover img-02.png"

interface userDataProps{
    userData:{
        details:{img: unknown, name:string, followers:number, coverImg1: unknown, coverImg2: unknown, coverImg3: unknown,coverImg4: unknown}[];
    }
}


export const Data={
    details: [
        {
            id: 1,
            img: img2,
            name:"Sally Fadel",
            followers:161,
            coverImg1: img3,
            coverImg2: programCover2,
            coverImg3: programCover3,
            coverImg4: programCover3
        },
        {
            id: 2,
            img: imgA,
            name:"Aniya Harber",
            followers:161,
            coverImg1: img3,
            coverImg2: programCover2,
            coverImg3: programCover3,
            coverImg4: programCover3
        },
        {
            id:3,
            img: imgE,
            name:"Edwardo Bea",
            followers:161,
            coverImg1: img3,
            coverImg2: programCover2,
            coverImg3: programCover3,
            coverImg4: programCover3
        },
        {
            id:4,
            img: imgR,
            name:"Reymundo",
            followers:161,
            coverImg1: img3,
            coverImg2: programCover2,
            coverImg3: programCover3,
            coverImg4: programCover3
        },
        {
            id:5,
            img: imgJ,
            name:"Jeanette",
            followers:161,
            coverImg1: img3,
            coverImg2: programCover2,
            coverImg3: programCover3,
            coverImg4: programCover3
        }
    ]

}

