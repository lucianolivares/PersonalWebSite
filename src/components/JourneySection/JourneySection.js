import React from 'react'
import {
    Circle,
    LabelText,
    Line,
    Time,
    TimelineContent,
    TimelineItem,
    TimeLink
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
                    {data.link && (
                        <TimeLink
                            href={data.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {data.link.text}
                        </TimeLink>
                    )}
                    <Circle />
                </TimelineContent>
            </TimelineItem>
        </>
    )
}

export default JourneySection;
