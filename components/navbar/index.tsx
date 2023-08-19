import Image from "next/image";
import {
  Buttons,
  Item,
  NavarbarItems,
  ProgramsContent,
  ProgramsWrapper,
  Slide,
  SlideWrapper,
  SubItem,
  SubMenu,
  Title,
  Wrapper,
} from "./styles";
import Logo from "../../public/assets/logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";
import Button from "../Button";
import Programs from "./programs";
import { useRouter } from "next/router";
export const Menu = [
  { title: "Accueil", link: "/" },
  {
    title: "UNFM",

    subMenu: [
      { title: "Qui sommes nous?", link: "who-us" },
      { title: "Discours fondateur", link: "discours" },
      { title: "Les allocutions princières", link: "allocutions" },
    ],
  },
  { title: "8 Mars", link: "8mars" },
  {
    title: "Activités",
    subMenu: [
      { title: "Activité 1", link: "activity1" },
      { title: "Activité 2", link: "activity2" },
      { title: "Activité 3", link: "activity3" },
      { title: "Activité 4", link: "activity4" },
      { title: "Activité 5", link: "activity5" },
    ],
  },
  {
    title: "Programmes",
    Card: Programs,
    subMenu: [
      {
        title: "Programme 1",
        link: "program1",
        image: require("../../public/assets/program1.png"),
      },
      {
        title: "Programme 2",
        link: "program2",
        image: require("../../public/assets/program2.png"),
      },
      {
        title: "Programme 3",
        link: "program3",
        image: require("../../public/assets/program3.png"),
      },
    ],
  },
  { title: "Espace Média", link: "media" },
];
const Navbar = (props: any) => {
  const { asPath } = useRouter();
  return (
    <Wrapper path={asPath}>
      <Link href="/">
        <Image width={90} height={80} src={Logo} alt="logo"></Image>
      </Link>

      <NavarbarItems>
        {Menu.map(({ title, subMenu, link, Card }, index) => (
          <>
            <Item active={index === 0} key={title} path={asPath}>
              {subMenu ? (
                <Title>
                  {title}
                  {subMenu && <ArrowDropDownIcon />}
                </Title>
              ) : (
                <Link href={link || ""}>
                  <Title>{title}</Title>
                </Link>
              )}
              {subMenu && (
                <SubMenu>
                  {Card ? (
                    <Card subMenu={subMenu} />
                  ) : (
                    subMenu.map((item) => (
                      <Link href={item.link} key={item.title}>
                        <SubItem>{item.title}</SubItem>
                      </Link>
                    ))
                  )}
                </SubMenu>
              )}
            </Item>
          </>
        ))}
      </NavarbarItems>
    </Wrapper>
  );
};

export default Navbar;
