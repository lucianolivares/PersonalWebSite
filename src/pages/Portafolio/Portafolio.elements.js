import styled from "styled-components";

const padding = "1.5rem";

export const Grid = styled.div`
  padding: 0 1rem 1rem 1rem;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  
  @media screen and (max-width: ${({ theme }) => theme.media.medium }) {
    padding: 0 2rem 1rem 2rem;
  }
`;

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  aspect-ratio: 1.5 / 1;
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 500ms ease;
  &:hover {
    transform: scale(1.05);
  }
`;
export const CardContent = styled.div`
  height: auto;
  padding: ${padding};
  /* border: 3px solid hotpink; */
  background: linear-gradient(
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 0.5),
    hsl(0 100% 0% / 0.9)
  );
  border-radius: 0.5rem;
  /* transform: translateY(10rem);
  ${Card}:hover &{
    transform: translateY(0rem);
  } */
`;

export const CardTitle = styled.h1`
  position: relative;
  color: white;
  width: max-content;
  /* border: 3px solid hotpink; */
  &:after {
    content: "";
    position: absolute;
    height: 3px;
    left: calc(${padding} * -1);
    bottom: 0;
    width: calc(100% + ${padding});
    background: ${({ theme }) => theme.colors.primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 500ms ease;
    @media only screen and (max-width: 400px) {
      transform: scaleX(1);
    }
  }
  ${Card}:hover &:after {
    transform: scaleX(1);
  }
`;

export const CardBody = styled.p`
  color: white;
  /* border: 3px solid hotpink; */
`;
