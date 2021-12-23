import React from "react";
import { HomeSection } from "../../components";
import { homeObjOne } from "./Data";
import { InfoSec } from "../../globalStyles";
import { ContainerHome } from "../../components/HomeSection/HomeSection.elements";

function Home() {
  return (
    <>
      <InfoSec name="home">
        <ContainerHome>
          <HomeSection {...homeObjOne} />
        </ContainerHome>
      </InfoSec>
    </>
  );
}

export default Home;
