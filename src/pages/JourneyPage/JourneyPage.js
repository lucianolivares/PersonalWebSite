import React from "react";
import timelineData from "./Data";
import { JourneySection } from "../../components";
import {
  JourneyTitle,
  SubTitle,
  TimelineContainer,
} from "../../components/JourneySection/JourneySection.elements";
import { Container, InfoColumn, InfoSec } from "../../globalStyles";
import {
  Img,
  ImgWrapper,
} from "../../components/HomeSection/HomeSection.elements";
import working from "../../images/certificate.svg";
const JourneyPage = () => {
  return (
    <>
      <InfoSec lightBg={true} name="journey">
        <SubTitle>Empleos y Educación</SubTitle>
        <JourneyTitle>Mi Experiencia</JourneyTitle>
        <Container>
            <InfoColumn>
              <ImgWrapper>
                <Img src={working} />
              </ImgWrapper>
            </InfoColumn>

            <InfoColumn>
              <TimelineContainer>
                {timelineData.map((data, idx) => (
                  <JourneySection data={data} key={idx} />
                ))}
              </TimelineContainer>
            </InfoColumn>
            
        </Container>
      </InfoSec>
    </>
  );
};

export default JourneyPage;
