import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import {
  Buttons,
  ProgramsContent,
  ProgramsWrapper,
  Slide,
  SlideWrapper,
} from "./styles";
const Card = ({
  subMenu,
  actions,
}: {
  actions: { text: string; link: string }[];
  subMenu: { title: string; link: string; image?: string }[];
}) => (
  <ProgramsWrapper>
    <ProgramsContent>
      {subMenu.map(({ link = "", image = "" }) => {
        console.log("link", link);
        return (
          <SlideWrapper key={link}>
            <Slide>
              <Link href={link}>
                <Image
                  src={image}
                  alt="item"
                  placeholder="blur"
                  layout="fill"
                  objectFit="contain"
                />
              </Link>
            </Slide>
          </SlideWrapper>
        );
      })}
    </ProgramsContent>
    <Buttons>
      {actions.map(({ text, link }) => (
        <Button href={link} key={text}>
          {text}
        </Button>
      ))}
    </Buttons>
  </ProgramsWrapper>
);

export default Card;
