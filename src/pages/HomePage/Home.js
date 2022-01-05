import React from "react";
import { InfoSec, InfoColumn } from "../../globalStyles";
import {
  HomeContainer,
  TextWrapper,
  TopLine,
  LinkLabel,
  ImgWrapper,
  Description,
  Img,
  Info,
  Icon,
  Name,
  LinksContainer,
} from "../../components/HomeSection/HomeSection.elements";
import * as FaIcons from "react-icons/fa";
import * as GoIcons from "react-icons/go";
import { misDatos } from "./Data";

function Home() {
  return (
    <>
      <InfoSec name="home">
        <HomeContainer>
          <InfoColumn>
            <ImgWrapper>
              <Img src={misDatos.img} alt={misDatos.alt} />
            </ImgWrapper>
          </InfoColumn>
          <InfoColumn>
            <TextWrapper>
              <TopLine lightTopLine={misDatos.lightTopLine}>
                {misDatos.topLine}
              </TopLine>
              <Name>
                {misDatos.headline} {misDatos.lastName}
              </Name>
              <Description>{misDatos.description}</Description>
              <Info>
                <Icon>
                  <GoIcons.GoLocation size={22} />
                </Icon>
                {misDatos.address}
              </Info>
              <Info>
                <Icon>
                  <GoIcons.GoMail size={22} />
                </Icon>
                {misDatos.email}
              </Info>
              <LinksContainer>
                <LinkLabel target="_blank" href={misDatos.links.linkedIn}>
                  <Icon>
                    <FaIcons.FaLinkedin />
                  </Icon>
                </LinkLabel>
                <LinkLabel target="_blank" href={misDatos.links.youtube}>
                  <Icon>
                    <FaIcons.FaYoutube />
                  </Icon>
                </LinkLabel>
                <LinkLabel target="_blank" href={misDatos.links.github}>
                  <Icon>
                    <FaIcons.FaGithub />
                  </Icon>
                </LinkLabel>
                <LinkLabel target="_blank" href={misDatos.links.instagram}>
                  <Icon>
                    <FaIcons.FaInstagram />
                  </Icon>
                </LinkLabel>
              </LinksContainer>
            </TextWrapper>
          </InfoColumn>
        </HomeContainer>
      </InfoSec>
    </>
  );
}

export default Home;
