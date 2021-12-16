import React from "react";
import { HomeSection } from "../../components";
import { homeObjOne } from "./Data";


function Home() {
  return (
    <>
      <HomeSection id="home" {...homeObjOne} />
    </>
  );
}

export default Home;
