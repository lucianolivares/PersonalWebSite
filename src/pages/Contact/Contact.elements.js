import styled from "styled-components";
import { Button } from "../../globalStyles";

export const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContactBody = styled.p`
  text-align: center;
  padding: 1rem 0;
`;

export const EmailButton = styled(Button)`
  background: ${({ theme }) => theme.colors.primary};
  a {
    color: white;
    text-decoration: none;
  }
`;
