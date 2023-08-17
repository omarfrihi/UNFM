import Call from "../SVG/call";
import Phone from "../SVG/phone";
import PhoneCall from "../SVG/phoneCall";
import {
  Wrapper,
  Text,
  Container,
  DownloadText,
  Actions,
  LangWrapper,
  WithYouText,
  Lang,
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
    <LangWrapper>
      <Lang active>Fr</Lang>
      <Lang>Ar</Lang>
      <Lang>En</Lang>
    </LangWrapper>
  </Container>
);

export default Topbar;
