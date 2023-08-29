import { Actions, Application, Wrapper, Text, Buttons } from "./styles";
import Image from "../Image";
import NextImage from "next/image";

import Link from "next/link";
import { Media } from "../../strapi/types";
export type DownloadProps = {
  downloadText: string;
  data: {
    androidLink: string;
    iOsLink: string;
    icon: Media;
    poster: Media;
  }[];
};
const Download = ({ downloadText, data }: DownloadProps) => (
  <Wrapper>
    {data.map(({ androidLink, iOsLink, icon, poster }) => (
      <Application key={iOsLink}>
        <Actions>
          <Image src={icon} height={80}></Image>
          <Buttons>
            <Text>{downloadText}</Text>
            <Link href={iOsLink}>
              <NextImage
                src={require("../../public/assets/appstore.png")}
                alt="app-store"
                height={30}
              ></NextImage>
            </Link>
            <Link href={androidLink}>
              <NextImage
                src={require("../../public/assets/googleplay.png")}
                alt="google-play"
                height={30}
              ></NextImage>
            </Link>
          </Buttons>
        </Actions>
        <Image src={poster} height={250}></Image>
      </Application>
    ))}
  </Wrapper>
);

export default Download;
