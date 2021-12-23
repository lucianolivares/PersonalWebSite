import React from "react";
import {
  Circle,
  Description,
  LabelText,
  Date,
  TimelineContent,
  TimelineItem,
} from "./JourneySection.elements";

const JourneySection = ({ data }) => {
  return (
    <>
      <TimelineItem>
        <TimelineContent>
          <Date>{data.date}</Date>
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
