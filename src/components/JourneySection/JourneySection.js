import React from 'react'
import {
    LabelText,
    Line,
    Time,
    TimelineContent,
    TimelineItem
} from './JourneySection.elements'

const JourneySection = ({ data }) => {
    return (
        <>
            <TimelineItem>
                <TimelineContent>
                    <Line colored={data.category.color}>
                        {data.category.tag}
                    </Line>
                    <Time>
                        {data.date}
                    </Time>
                    <LabelText>
                        {data.text}
                    </LabelText>
                </TimelineContent>
            </TimelineItem>
        </>
    )
}

export default JourneySection;
