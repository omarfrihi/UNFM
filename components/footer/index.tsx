import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Mail from "../SVG/mail";
import Phone from "../SVG/phone-footer";
import { Actions, ContactUs, Container, Text, Wrapper } from "./styles";
export type FooterProps = {
  data: {
    contactUs: string;
    phoneNumbers: string[];
    email: string;
    copytight: string;
  };
};
const Footer = ({
  data: { contactUs, phoneNumbers, email, copytight },
}: FooterProps) => (
  <Container>
    <Actions>
      <ContactUs>{contactUs}</ContactUs>
      <Wrapper>
        <Phone />
        <Text>{phoneNumbers.join("|")}</Text>
      </Wrapper>

      <Wrapper>
        <Mail />
        <Text>{email}</Text>
      </Wrapper>
    </Actions>
    <Wrapper>
      <Text>{copytight}</Text>
    </Wrapper>
  </Container>
);

export default Footer;
