import React from "react";
import { HomeSection } from "../../components";
import { homeObjOne } from "./Data";
import { Container, InfoSec } from "../../globalStyles";

function Home() {
  return (
    <>
      <InfoSec name="home">
        <Container>
          <HomeSection {...homeObjOne} />
        </Container>
      </InfoSec>
    </>
  );
}

export default Home;
