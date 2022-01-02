import React from "react";
import {
  ImgWrapper,
  Img,
} from "../../components/HomeSection/HomeSection.elements";
import {
  JourneyTitle,
  SubTitle,
} from "../../components/JourneySection/JourneySection.elements";
import {
  Container,
  InfoColumn,
  InfoRow,
  InfoSec,
  Button,
} from "../../globalStyles";
import emailImage from "../../images/email.svg";
import { ContactBody, ContainerContact, EmailButton } from "./Contact.elements";


const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};

const Contact = () => {
  return (
    <>
      <InfoSec lightBg={true} name="contact">
        <SubTitle>Correo Electrónico</SubTitle>
        <JourneyTitle>Contacto</JourneyTitle>
        <Container>
          <InfoRow>
            <InfoColumn>
              <ImgWrapper>
                <Img src={emailImage} />
              </ImgWrapper>
            </InfoColumn>
            <InfoColumn>
              <ContainerContact>
                <ContactBody>
                  Para contratación, solicitar servicios o presupuesto.
                </ContactBody>
                <EmailButton>
                  <Mailto email="lucianolivares.lo@gmail.com" subject="Webpage Contact">Enviar Email</Mailto>
                </EmailButton>
                <ContactBody>
                  Intentaré responder lo antes posible.
                </ContactBody>
              </ContainerContact>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default Contact;
