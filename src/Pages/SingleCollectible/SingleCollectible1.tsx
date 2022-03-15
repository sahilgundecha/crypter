import React from "react";
import SingleCollectible from "./Singlecollectible";

export default function SingleCollectible1() {
  const handleSwitch1 = () => {
    window.location.href = "./single-collectible";
  };
  return (
    <>
      <SingleCollectible
        tittle="Create Mutiple Collectible"
        switch="Single"
        Click={handleSwitch1}
      />
    </>
  );
}
