import Title from "../title";
import {
  Wrapper,
  Title as MediaTitle,
  Medias,
  MediaContainer,
  MedialTitleWrapper,
  ImageContainer,
} from "./styles";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { ImageError } from "next/dist/server/image-optimizer";
import Image from "../Image";
import ReactPlayer from "react-player";
import Button from "../Button";
import Link from "next/link";
import { Media, Media as Media1 } from "../../strapi/types";

export enum EMediaType {
  video = "video",
  image = "image",
}
export type MediaProps = {
  data: {
    title: string;
    type: string;
    src: Media1 | string;
    id: number;
  }[];
  title: string;
  action: { text: string; link: string };
};
const Media = ({ data, title, action: { text, link } }: MediaProps) => (
  <Wrapper>
    <Title>{title}</Title>
    <Medias>
      {data.map(({ title, type, src, id }) => (
        <MediaContainer key={title}>
          {type === EMediaType.video ? (
            <ReactPlayer url={src as string} height={290} width={300} />
          ) : (
            <ImageContainer>
              <Image
                placeholder="blur"
                src={src as Media}
                objectFit="cover"
                layout="fill"
              ></Image>
            </ImageContainer>
          )}
          <Link href={`/medias/${id}`}>
            <MedialTitleWrapper>
              <MediaTitle>{title}</MediaTitle>

              <ArrowOutwardIcon fontSize="inherit" />
            </MedialTitleWrapper>
          </Link>
        </MediaContainer>
      ))}
    </Medias>
    <Button href={link}>{text}</Button>
  </Wrapper>
);

export default Media;
