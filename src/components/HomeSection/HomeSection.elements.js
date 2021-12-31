import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  height: 94vh;
  align-items: center;
  padding: 0 2rem;
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
  display: flex;
  max-width: 100%;
  padding-right: 1rem;

  @media screen and (max-width: 768px) {
    margin: 1rem 0 2rem 0;
    height: 30vh;
    padding-right: 0;
  }
`;

export const TopLine = styled.p`
  color: ${({ lightTopLine }) => (lightTopLine ? "#white" : "#4B59F7")};
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 4rem;
  max-height: 500px;
`;

export const Name = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: clamp(2rem, 10vw, 3rem);
  padding-bottom: 1rem;
  padding-top: 1rem;
  line-height: 100%;
`;

export const Description = styled.p`
  display: flex;
  font-size: 1.2rem;
  padding-bottom: 1rem;
`;

export const Info = styled(Description)`
  word-break: break-all;
  padding-bottom: 0.3rem;
`;
export const LinkLabel = styled.a`
  color: white;
  text-decoration: none;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem;
`;

export const LinksContainer = styled.div`
  display: flex;
  padding-top: 1rem;
`;
