import Link from "next/link";
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

      <Link href="download">
        <Wrapper>
          <Phone />
          <Text>Télécharger l’application:</Text>
          <DownloadText>KOLONAMA</DownloadText>
        </Wrapper>
      </Link>
    </Actions>
    <LangWrapper>
      <Link href="">
        <Lang active>Fr</Lang>
      </Link>
      <Link href="ar">
        <Lang>Ar</Lang>
      </Link>
      <Link href="en">
        <Lang>En</Lang>
      </Link>
    </LangWrapper>
  </Container>
);

export default Topbar;
