import React from "react";
import { Button, InfoRow, InfoColumn } from "../../globalStyles";
import {
  TextWrapper,
  TopLine,
  Heading,
  LastName,
  Subtitle,
  ImgWrapper,
  LinkSection,
  Img,
  Name,
} from "./HomeSection.elements";

function HomeSection({
  primary,
  topLine,
  lightTopLine,
  lightTextDesc,
  headline,
  lastName,
  description,
  buttonLabel1,
  buttonLabel2,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <InfoRow imgStart={imgStart}>
        <InfoColumn>
          <TextWrapper>
            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
            <Heading>
              <Name>{headline}</Name>
              <LastName>{lastName}</LastName>
            </Heading>
            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
            <Heading>
              <LinkSection to="journey" spy={true} offset={-80}>
                <Button fontBig primary={false}>
                  {buttonLabel1}
                </Button>
              </LinkSection>
              <LinkSection to="/contact">
                <Button fontBig primary={primary}>
                  {buttonLabel2}
                </Button>
              </LinkSection>
            </Heading>
          </TextWrapper>
        </InfoColumn>
        <InfoColumn>
          <ImgWrapper>
            <Img src={img} alt={alt} />
          </ImgWrapper>
        </InfoColumn>
      </InfoRow>
    </>
  );
}

export default HomeSection;
