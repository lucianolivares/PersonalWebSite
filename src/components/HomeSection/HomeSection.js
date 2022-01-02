import React from "react";
import { InfoRow, InfoColumn } from "../../globalStyles";
import * as FaIcons from "react-icons/fa";
import * as GoIcons from "react-icons/go";
import {
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
} from "./HomeSection.elements";

function HomeSection({
  topLine,
  lightTopLine,
  headline,
  lastName,
  description,
  address,
  email,
  links,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <InfoRow>
        <InfoColumn>
          <ImgWrapper>
            <Img src={img} alt={alt} />
          </ImgWrapper>
        </InfoColumn>
        <InfoColumn>
          <TextWrapper>
            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
            <Name>
              {headline} {lastName}
            </Name>
            <Description>{description}</Description>
            <Info>
              <Icon>
                <GoIcons.GoLocation size={22} />
              </Icon>
              {address}
            </Info>
            <Info>
              <Icon>
                <GoIcons.GoMail size={22} />
              </Icon>
              {email}
            </Info>
            <LinksContainer>
              <LinkLabel target="_blank" href={links.linkedIn}>
                <Icon>
                  <FaIcons.FaLinkedin />
                </Icon>
              </LinkLabel>
              <LinkLabel target="_blank" href={links.youtube}>
                <Icon>
                  <FaIcons.FaYoutube />
                </Icon>
              </LinkLabel>
              <LinkLabel target="_blank" href={links.github}>
                <Icon>
                  <FaIcons.FaGithub />
                </Icon>
              </LinkLabel>
              <LinkLabel target="_blank" href={links.instagram}>
                <Icon>
                  <FaIcons.FaInstagram />
                </Icon>
              </LinkLabel>
            </LinksContainer>
          </TextWrapper>
        </InfoColumn>
      </InfoRow>
    </>
  );
}

export default HomeSection;
