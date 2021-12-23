import React from 'react'
import { JourneyTitle, SubTitle } from '../../components/JourneySection/JourneySection.elements';
import { Container, InfoColumn, InfoRow, InfoSec } from '../../globalStyles';

const Portafolio = () => {
    return (
      <>
        <InfoSec name="portafolio">
          <SubTitle>Trabajos Realizados</SubTitle>
          <JourneyTitle>Portafolio</JourneyTitle>
          <Container>
            <InfoRow>
              <InfoColumn>

              </InfoColumn>
            </InfoRow>
          </Container>
        </InfoSec>
      </>
    );
}

export default Portafolio
