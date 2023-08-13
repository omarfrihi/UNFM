import Call from "../SVG/call";
import Phone from "../SVG/phone";
import PhoneCall from "../SVG/phoneCall";
import {
  Wrapper,
  Text,
  Container,
  DownloadText,
  Actions,
  WithYouWrapper,
  WithYouText,
} from "./styles";

const Topbar = () => (
  <Container>
    <Actions>
      <Wrapper>
        <Call />
        <Text>Appelez-nous: 8350</Text>
      </Wrapper>

      <Wrapper>
        <Phone />
        <Text>Télécharger l’application:</Text>
        <DownloadText>KOLONAMA</DownloadText>
      </Wrapper>
    </Actions>
    <WithYouWrapper>
      <PhoneCall />
      <WithYouText>كلنا معك</WithYouText>
    </WithYouWrapper>
  </Container>
);

export default Topbar;
