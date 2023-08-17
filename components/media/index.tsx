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

const Media = () => (
  <Wrapper>
    <Title>Espace Media</Title>
    <Medias>
      <MediaContainer>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=xmlykrsN7Ok"
          height={290}
          width={400}
        />

        <MedialTitleWrapper>
          <MediaTitle>
            Étapes phares dans le processus de promotion de la condition de la
            femme et de la fille - 2022
          </MediaTitle>

          <ArrowOutwardIcon fontSize="inherit" />
        </MedialTitleWrapper>
      </MediaContainer>
      <MediaContainer>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=xmlykrsN7Ok"
          height={290}
          width={400}
        />
        <MedialTitleWrapper>
          <MediaTitle>
            {`L'exposition numérique d’art plastique sur le phénomène de la
            violence faite aux femmes`}
          </MediaTitle>
          <ArrowOutwardIcon fontSize="inherit" />
        </MedialTitleWrapper>
      </MediaContainer>

      <MediaContainer>
        <Image
          placeholder="blur"
          src={require("../../public/assets/media3.png")}
          alt="media3"
          width={400}
          height={290}
        ></Image>

        <MedialTitleWrapper>
          <MediaTitle>
            Cérémonie de célébration de la Journée Internationale de la Femme 8
            Mars 2020 - Vidéo
          </MediaTitle>
          <ArrowOutwardIcon fontSize="inherit" />
        </MedialTitleWrapper>
      </MediaContainer>
    </Medias>
    <Button>En savoir plus</Button>
  </Wrapper>
);

export default Media;
