import styled from "styled-components";

export const JourneyTitle = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  font-size: clamp(0.5rem, 12vw, 3.2rem);
  justify-content: center;
  word-break: break-all;
  @media screen and (max-width: 768px) {
    justify-content: start;
    padding-left: 10px;
  }
`;

export const SubTitle = styled(JourneyTitle)`
  color: #fff;
  font-size: clamp(0.5rem, 6vw, 1.6rem);
  padding-top: 2rem;
`;

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin-bottom: 30px;
  &:after {
    background-color: ${({ theme }) => theme.colors.secondary};
    content: "";
    position: absolute;
    width: 4px;
    left: 0px;
    height: 100%;
  }
`;
export const TimelineItem = styled.div`
  display: flex;

  padding-left: 30px;
  padding-top: 10px;
  padding-top: 10px;
`;


export const TimelineContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  text-align: left;
`;

export const Date = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 16px;
  text-transform: uppercase;
`;

export const LabelText = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  margin: 5px 0;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 0.8rem;
`;

export const Circle = styled.span`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 10px);
  right: auto;
  left: -38px;
  width: 20px;
  height: 20px;
  z-index: 100;
`;
