import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Mail from "../SVG/mail";
import Phone from "../SVG/phone-footer";
import { Actions, ContactUs, Container, Text, Wrapper } from "./styles";
const Footer = () => (
  <Container>
    <Actions>
      <ContactUs>Nous contactez:</ContactUs>
      <Wrapper>
        <Phone />
        <Text>05 37 63 13 17 | 05 37 63 12 91</Text>
      </Wrapper>

      <Wrapper>
        <Mail />
        <Text>contact@unfm.ma</Text>
      </Wrapper>
    </Actions>
    <Wrapper>
      <Text>Copyright © UNFM 2023 Tous droits réservés</Text>
    </Wrapper>
  </Container>
);

export default Footer;
