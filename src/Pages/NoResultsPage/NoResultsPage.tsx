import "./NoResultsPage.css";
import noresultsImg from "../../Assets/images/noResultImg.png";
import BoxContainer from "../../Components/BoxContainer.component";
import Searchbar from "../../Components/Searchbar/Searchbar";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Grid } from "@mui/material";
import Image from "material-ui-image";
import { noResultsArrData } from "../../DB/NoResults/noResultsArray";

export interface Array_type {
  ArrProps: { id: number; name: string; itemCounts: string; itemImg: string }[];
}

export default function NoResultsPage() {
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
