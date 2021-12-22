import React from "react";
import {
  Circle,
  Description,
  LabelText,
  Time,
  TimelineContent,
  TimelineItem,
} from "./JourneySection.elements";

const JourneySection = ({ data }) => {
  return (
    <>
      <TimelineItem>
        <TimelineContent>
          <Time>{data.date}</Time>
          <LabelText>{data.title}</LabelText>
          <Description>
            {data.text}
          </Description>
          <Circle />
        </TimelineContent>
      </TimelineItem>
    </>
  );
};

export default JourneySection;
