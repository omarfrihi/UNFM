import { Actions, Application, Wrapper, Text, Buttons } from "./styles";
import Image from "next/image";
import Link from "next/link";

const Download = ({
  downloadText,
  data,
}: {
  downloadText: string;
  data: {
    androidLink: string;
    iOsLink: string;
    icon: string;
    poster: string;
  }[];
}) => (
  <Wrapper>
    {data.map(({ androidLink, iOsLink, icon, poster }) => (
      <Application key={poster}>
        <Actions>
          <Image src={icon} alt="logo" height={80}></Image>
          <Buttons>
            <Text>{downloadText}</Text>
            <Link href={iOsLink}>
              <Image
                src={require("../../public/assets/appstore.png")}
                alt="app-store"
                height={30}
              ></Image>
            </Link>
            <Link href={androidLink}>
              <Image
                src={require("../../public/assets/googleplay.png")}
                alt="google-play"
                height={30}
              ></Image>
            </Link>
          </Buttons>
        </Actions>
        <Image src={poster} alt="poster" height={250}></Image>
      </Application>
    ))}
  </Wrapper>
);

export default Download;
