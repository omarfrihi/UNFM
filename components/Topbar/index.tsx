import Link from "next/link";
import Call from "../SVG/call";
import Phone from "../SVG/phone";
import PhoneCall from "../SVG/phoneCall";
import axios from "axios";
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
import { useRouter } from "next/router";
export type TopbarProps = {
  data: {
    callUs: string;
    phoneNumber: string;
    download: { text: string; appName: string; link: string };
  };
};
const Topbar = ({
  data: {
    callUs,
    phoneNumber,
    download: { text, appName, link },
  },
}: TopbarProps) => {
  const { locales, locale: currentLocale, asPath } = useRouter();
  return (
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
        {locales?.map((locale) => (
          <Link href={asPath} key={"fr"} locale={locale}>
            <Lang active={locale === currentLocale}>{locale}</Lang>
          </Link>
        ))}
      </LangWrapper>
    </Container>
  );
};

export default Topbar;
