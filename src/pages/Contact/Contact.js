import React from 'react'
import { JourneyTitle, SubTitle } from '../../components/JourneySection/JourneySection.elements';
import { Container, InfoColumn, InfoRow, InfoSec } from '../../globalStyles';

const Contact = () => {
    return (
      <>
        <InfoSec lightBg={true} name="contact">
          <SubTitle>Enviar Email</SubTitle>
          <JourneyTitle>Contacto</JourneyTitle>
          <Container>
            <InfoRow>
              <InfoColumn></InfoColumn>
            </InfoRow>
          </Container>
        </InfoSec>
      </>
    );
}

export default Contact
