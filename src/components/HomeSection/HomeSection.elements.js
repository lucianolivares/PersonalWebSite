import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const ContainerHome = styled.div`
  height: 94vh;
  margin-top: -4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 2rem;
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    align-items: start;
  }
`;
export const TextWrapper = styled.div`
  max-width: 100%;
  padding-top: 0;
  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 100%;
  display: flex;
  padding-right: 1rem;

  @media screen and (max-width: 768px) {
    margin: 1rem 0 2rem 0;
    height: 30vh;
    padding-right: 0;
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
  border-radius: 50px;
  max-height: 500px;
`;

export const Heading = styled.div`
  display: flex;
  @media screen and (max-width: 350px) {
    flex-direction: column;
  }
`;

export const LinkSection = styled(LinkScroll)`
  padding-right: 20px;
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: clamp(2rem, 10vw, 3rem);
  margin-bottom: 20px;
  padding-right: 10px;
  line-height: 1.8rem;
  font-weight: bold;
`;

export const LastName = styled(Name)`
  color: #fff;
`;
export const Description = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const Info = styled(Description)`
  margin-bottom: 6px;
  word-break: break-all;
`;
export const LinkLabel = styled.a`
  display: flex;
  color: #fff;
  text-decoration: none;
  margin-bottom: 35px;
  margin-top: 15px;
  font-size: 30px;
  line-height: 24px;
  padding-right: 10px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Icon = styled.div`
  padding-right: 20px;
`;

export const LinksContainer = styled.div`
  display: flex;
`;
