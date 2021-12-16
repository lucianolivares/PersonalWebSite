import React from 'react';
import timelineData from './Data';
import { JourneySection } from '../../components'
import { JourneyContainer, JourneyTitle, TimelineContainer } from '../../components/JourneySection/JourneySection.elements'

const JourneyPage = () => {
    return (
        <>
            <JourneyContainer id="journey">
                <JourneyTitle>
                    Mi Trayectoria
                </JourneyTitle>
                <TimelineContainer>
                    {
                        timelineData.map((data, idx) => (
                            <JourneySection data={data} key={idx} />
                            ))
                        }
                </TimelineContainer>
            </JourneyContainer>
        </>
    )
}

export default JourneyPage
