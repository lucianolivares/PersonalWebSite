import styled from "styled-components";

export const JourneyTitle = styled.h1`
  color: #20ce65;
  display: flex;
  font-size: 48px;
  justify-content: center;
  word-break: break-all;
`;

export const SubTitle = styled.h1`
  padding-top: 40px;
  padding-right: 10px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  color: #fff;
  word-break: break-all;
`;

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin-bottom: 30px;
  &:after {
    background-color: #ffc514;
    content: "";
    position: absolute;
    width: 4px;
    height: 100%;
  }
`;

export const TimelineItem = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  justify-content: flex-start;
  padding-left: 30px;
  padding-top: 10px;
  padding-top: 10px;
`;

export const TimelineContent = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  position: relative;
  width: 100%;
  text-align: left;
  align-items: flex-start;
`;

export const Line = styled.span`
  background: ${({ colored }) => colored};
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  top: 5px;
  left: auto;
  right: 5px;
  letter-spacing: 1px;
  padding: 5px;
  position: absolute;
  text-transform: uppercase;
`;

export const Time = styled.p`
  color: #ffc514;
  font-size: 14px;
  font-weight: bold;
`;

export const LabelText = styled.p`
  font-size: 22px;
  line-height: 24px;
  font-weight: bold;
  margin: 15px 0;
`;

export const Description = styled.p`
  font-size: 16px;
`;

export const Circle = styled.span`
  background-color: #ffc514;
  border: 3px solid #ffc514;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 10px);
  right: auto;
  left: -38px;
  width: 20px;
  height: 20px;
  z-index: 100;
`;
