import React from 'react';
import timelineData from './Data';
import { JourneySection } from '../../components'
import { TimelineContainer } from '../../components/JourneySection/JourneySection.elements'

const JourneyPage = () => {
    return (
        <>
            <TimelineContainer>
                {
                    timelineData.map((data, idx) => (
                        <JourneySection data={data} key={idx} />
                        ))
                    }
            </TimelineContainer>
        </>
    )
}

export default JourneyPage
