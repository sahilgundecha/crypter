import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const Item = () => {
  const [Clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };
  return (
    <Container>
      <Grid>
        <button onClick={handleClick}>click</button>
        {Clicked ? (
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quos
            ea officia expedita ipsum hic in eaque culpa officiis maxime.
          </div>
        ) : null}
      </Grid>
    </Container>
  );
};

export default Item;
