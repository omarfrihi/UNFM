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
const Menu = [
  { title: "Accueil" },
  {
    title: "UNFM",
    subMenu: [{ title: "Histoire" }, { title: "Qui sommes nous?" }],
  },
  { title: "8 Mars" },
  {
    title: "Activités",
    subMenu: [
      { title: "Activité 1" },
      { title: "Activité 2" },
      { title: "Activité 3" },
      { title: "Activité 4" },
      { title: "Activité 5" },
    ],
  },
  {
    title: "Programmes",
    subMenu: [
      { title: "Programme 1" },
      { title: "Programme 2" },
      { title: "Programme 3" },
      { title: "Programme 4" },
      { title: "Programme 5" },
    ],
  },
  { title: "Espace Média" },
];

const Navbar = () => (
  <Wrapper>
    <Image width={90} height={80} src={Logo} alt="logo"></Image>
    <NavarbarItems>
      {Menu.map(({ title, subMenu }, index) => (
        <>
          <Item active={index === 0} key={title}>
            <Title>
              {title}
              {subMenu && <ArrowDropDownIcon />}
            </Title>
            {subMenu && (
              <SubMenu>
                {subMenu.map((item) => (
                  <SubItem>{item.title}</SubItem>
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
