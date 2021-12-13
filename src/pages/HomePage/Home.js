import React from "react";
import { HomeSection } from "../../components";
import { homeObjOne } from "./Data";


function Home() {
  return (
    <>
      <HomeSection {...homeObjOne} />
    </>
  );
}

export default Home;
