import React from "react";
import {
  JourneyTitle,
  SubTitle,
} from "../../components/JourneySection/JourneySection.elements";
import { ContainerPortafolio, InfoColumn, InfoSec } from "../../globalStyles";
import {
  Grid,
  Card,
  CardContent,
  CardTitle,
  CardBody,
} from "./Portafolio.elements";
import projects from "./Data";
import {
  Img,
  ImgWrapper,
} from "../../components/HomeSection/HomeSection.elements";
import programming from "../../images/programming.svg";

const Portafolio = () => {
  return (
    <>
      <InfoSec name="portafolio">
        <SubTitle> Trabajos Realizados </SubTitle>{" "}
        <JourneyTitle> Portafolio </JourneyTitle>{" "}
        <ContainerPortafolio className="portafolio">
          <InfoColumn>
            <ImgWrapper>
              <Img src={programming} />
            </ImgWrapper>
          </InfoColumn>

          
          <InfoColumn>
            <Grid>
              {projects.map((data, index) => (
                <Card image={data.image} target="_blank" href={data.url}>
                  <CardContent>
                    <CardTitle> {data.title} </CardTitle>
                    <CardBody> {data.body} </CardBody>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </InfoColumn>
        </ContainerPortafolio>
      </InfoSec>
    </>
  );
};

export default Portafolio;
