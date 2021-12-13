import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
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
  lightBg,
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
  start,
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
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
                  <LinkSection to="/about">
                    <Button fontBig primary={false}>
                      {buttonLabel1}
                    </Button>
                  </LinkSection>
                  <Link to="/contact">
                    <Button fontBig primary={primary}>
                      {buttonLabel2}
                    </Button>
                  </Link>
                </Heading>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default HomeSection;
