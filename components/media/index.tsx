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
import Image from "next/image";
import ReactPlayer from "react-player";
import Button from "../Button";
import Link from "next/link";
export enum EMediaType {
  video = "video",
  image = "image",
}

const Media = ({
  data,
  title,
  action: { text, link },
}: {
  data: {
    title: string;
    type: EMediaType;
    src: string;
    id: string;
  }[];
  title: string;
  action: { text: string; link: string };
}) => (
  <Wrapper>
    <Title>{title}</Title>
    <Medias>
      {data.map(({ title, type, src, id }) => (
        <MediaContainer key={title}>
          {type === EMediaType.video ? (
            <ReactPlayer url={src} height={290} width={300} />
          ) : (
            <ImageContainer>
              <Image
                placeholder="blur"
                src={src}
                alt="media"
                objectFit="cover"
                layout="fill"
              ></Image>
            </ImageContainer>
          )}
          <Link href={id}>
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
