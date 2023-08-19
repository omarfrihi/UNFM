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
const Programs = ({
  subMenu,
}: {
  subMenu: { title: string; link: string; image?: string }[];
}) => (
  <ProgramsWrapper>
    <ProgramsContent>
      {subMenu.map(({ link = "", image = "" }) => (
        <SlideWrapper>
          <Slide>
            <Link href={link}>
              <Image
                src={image}
                alt="program1"
                placeholder="blur"
                layout="fill"
                objectFit="contain"
              />
            </Link>
          </Slide>
        </SlideWrapper>
      ))}
    </ProgramsContent>
    <Buttons>
      <Button>Tous les Programmes</Button>
      <Button>Toutes Nos Catégories</Button>
    </Buttons>
  </ProgramsWrapper>
);

export default Programs;
