import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const TextWrapper = styled.div`
  max-width: 100%;
  padding-top: 0;
`;

export const ImgWrapper = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#fff" : "#4B59F7")};
  font-size: 18px;
  line-height: 16px;
  font-weight: 600;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  border-radius: 50px;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const Heading = styled.div`
  display: flex;
`;

export const LinkSection = styled(LinkScroll)`
  padding-right: 20px;
`;

export const Name = styled.h1`
  margin-bottom: 20px;
  padding-right: 10px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: bold;
  color: #20ce65;
`;

export const LastName = styled.h1`
  margin-bottom: 20px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: bold;
  color: #fff;
`;
export const Description = styled.div`
  color: #fff;
  text-decoration: none;
  display: flex;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const Info = styled.div`
  color: #fff;
  text-decoration: none;
  display: flex;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 6px;
`;
export const LinkLabel = styled.a`
  color: #fff;
  text-decoration: none;
  display: flex;
  margin-bottom: 35px;
  margin-top: 15px;
  font-size: 30px;
  line-height: 24px;
  padding-right: 10px;
  cursor: pointer;
`;

export const Icon = styled.div`
  padding-right: 20px;
`;

export const LinksContainer = styled.div`
  display: flex;
`;