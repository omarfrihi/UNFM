import Image from "next/image";
import {
  Item,
  NavarbarItems,
  SubItem,
  SubMenu,
  Title,
  Wrapper,
} from "./styles";
import Logo from "../../public/assets/logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";
export const Menu = [
  { title: "Accueil", link: "/" },
  {
    title: "UNFM",

    subMenu: [
      { title: "Qui sommes nous?", link: "Who-us" },
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
    subMenu: [
      { title: "Programme 1", link: "program1" },
      { title: "Programme 2", link: "program2" },
      { title: "Programme 3", link: "program3" },
      { title: "Programme 4", link: "program4" },
      { title: "Programme 5", link: "program5" },
    ],
  },
  { title: "Espace Média", link: "media" },
];

const Navbar = () => (
  <Wrapper>
    <Image width={90} height={80} src={Logo} alt="logo"></Image>
    <NavarbarItems>
      {Menu.map(({ title, subMenu, link }, index) => (
        <>
          <Item active={index === 0} key={title}>
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
                {subMenu.map((item) => (
                  <Link href={item.link} key={item.title}>
                    <SubItem>{item.title}</SubItem>
                  </Link>
                ))}
              </SubMenu>
            )}
          </Item>
        </>
      ))}
    </NavarbarItems>
  </Wrapper>
);

export default Navbar;
