import React from "react";
import { HomeSection } from "../../components";
import { homeObjOne } from "./Data";
import { InfoSec } from '../../components/HomeSection/HomeSection.elements'

function Home() {
  return (
    <>
      <InfoSec  name="home" >
        <HomeSection {...homeObjOne} />

      </InfoSec>
    </>
  );
}

export default Home;
