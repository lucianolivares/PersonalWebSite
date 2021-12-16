import styled from "styled-components";

export const JourneyContainer = styled.div`
  background: #202D37;
`;

export const JourneyTitle = styled.h1`
    color: #20ce65;
    display: flex;
    justify-content: center;
    padding: 40px;
  
`;
export const TimelineContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    &:after {
        background-color: #FFC514;
        content: '';
        position: absolute;
        left: calc(50% - 2px);
        width: 4px;
        height: 100%;
    }
`

export const TimelineItem = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  position: relative;
  margin: 10px 0;
  width: 50%;
  &:nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
}
  
`;

export const TimelineContent = styled.div`
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 15px;
    position: relative;
    width: 400px;
    max-width: 70%;
    text-align: right;
    &:after {
        content: ' ';
        background-color: #fff;
        box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.2);
        position: absolute;
        right: -7.5px;
        top: calc(50% - 7.5px);
        transform: rotate(45deg);
        width: 15px;
        height: 15px;
    }
    ${TimelineItem}:nth-child(odd) & {
        text-align: left;
        align-items: flex-start;
        &::after {
            right: auto;
            left: -7.5px;
            box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
        }
}
`;

export const Line = styled.span`
    background: ${({ colored }) => colored};;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    top: 5px;
    left: 5px;
    letter-spacing: 1px;
    padding: 5px;
    position: absolute;
    text-transform: uppercase;
    ${TimelineItem}:nth-child(odd) & {
        left: auto;
        right: 5px;
    }
`

export const Time = styled.time`
    color: #777;
    font-size: 12px;
    font-weight: bold;
`

export const LabelText = styled.p`
    font-size: 16px;
    line-height: 24px;
    margin: 15px 0;
    max-width: 250px;
`

export const TimeLink = styled.a`
    color: #333;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    &:after {
        content: ' ►';
        font-size: 12px;
    }
`

export const Circle = styled.circle`
    background-color: #FFC514;
    border: 3px solid #FFC514;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 10px);
    right: -40px;
    width: 20px;
    height: 20px;
    z-index: 100;
    ${TimelineItem}:nth-child(odd) & {
        right: auto;
        left: -40px;
    }
`
