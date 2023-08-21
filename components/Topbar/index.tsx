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
export type TopbarProps = {
  data: {
    callUs: string;
    phoneNumber: string;
    download: { text: string; appName: string; link: string };
    languages: {
      label: string;
      value: string;
    }[];
  };
};
const Topbar = ({
  data: {
    callUs,
    phoneNumber,
    download: { text, appName, link },
    languages,
  },
}: TopbarProps) => (
  <Container>
    <Actions>
      <Wrapper>
        <Call />
        <Text>{`${callUs} ${phoneNumber}`}</Text>
      </Wrapper>

      <Link href={link}>
        <Wrapper>
          <Phone />
          <Text>{`${text}`}</Text>
          <DownloadText>{appName}</DownloadText>
        </Wrapper>
      </Link>
    </Actions>
    <LangWrapper>
      {languages.map(({ label, value }) => (
        <Link href="" key={"fr"}>
          <Lang active={value === "fr"}>{label}</Lang>
        </Link>
      ))}
    </LangWrapper>
  </Container>
);

export default Topbar;
