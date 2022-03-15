import React from "react";
import "./NoResultsPage.css";
import noresultsImg from "../../Assets/images/noResultImg.png";
import BoxContainer from "../../Components/BoxContainer.component";
import Searchbar from "../../Components/Searchbar/Searchbar";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Artwork from "../../Assets/images/ArtworkImg.png";
import musicImg from "../../Assets/images/musicImg.png";
import GameIcon from "../../Assets/images/gameImg.png";
import PhotographyImg from "../../Assets/images/photographyImg.png";
import { Grid } from "@mui/material";
import Image from "material-ui-image";
import {noResultsArrData} from "../../DB/NoResults/noResultsArray";

export interface Array_type {
  ArrProps: { id: number; name: string; itemCounts: string; itemImg: string }[];
}

export default function NoResultsPage() {
  // const ArrData = [
  //   {
  //     id: 1,
  //     name: "Artwork",
  //     itemCounts: "138 items",
  //     itemImg: Artwork,
  //   },
  //   {
  //     id: 2,
  //     name: "Photography",
  //     itemCounts: "136 items",
  //     itemImg: PhotographyImg,
  //   },
  //   {
  //     id: 3,
  //     name: "Game",
  //     itemCounts: "134 items",
  //     itemImg: GameIcon,
  //   },
  //   {
  //     id: 4,
  //     name: "Music",
  //     itemCounts: "132 items",
  //     itemImg: musicImg,
  //   },
  // ];

  return (
    <Grid>
      <Grid className="ImageGrid">
        <Image aspectRatio={1.8} src={noresultsImg} className="noResultImg" />
      </Grid>
      <p className="noResults_Text">
        Sorry, we couldn’t find any results for this search.
      </p>
      <p className="grayatext">Maybe give one of these a try?</p>
      <div className="searchBarStyle">
        <Searchbar
          borderRadius={"30px"}
          placeholder={"Enter your search..."}
          icon={<ArrowCircleRightIcon style={{ color: "#3772FF" }} />}
        />
      </div>
      <div>
        <h3 className="headingStyle">Explore more</h3>
        <BoxContainer ArrProps={noResultsArrData} />
      </div>
    </Grid>
  );
}
