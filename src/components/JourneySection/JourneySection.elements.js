import styled from "styled-components";

export const TimelineContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 40px 0;
    &:after {
        background-color: #e17b77;
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
    &:nth-child(odd) {
        text-align: left;
        align-items: flex-start;
        &:after {
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
    &:nth-child(odd) {
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

