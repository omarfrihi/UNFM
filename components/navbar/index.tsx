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
import Logo2 from "../../public/assets/logo2.png";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";
import Button from "../Button";
import Card from "./card";
import { useRouter } from "next/router";

export type NavbarProps = {
  data: {
    title: string;
    link?: string;
    isCard?: boolean;
    subMenu?: { title: string; link: string; image?: string }[];
    actions: { text: string; link: string }[];
  }[];
};
const Navbar = ({ data }: NavbarProps) => {
  const { asPath } = useRouter();
  const test = useRouter();
  console.log("paths", test);
  return (
    <Wrapper path={asPath}>
      <Link href="/">
        <Image
          width={90}
          src={asPath === "/" ? Logo : Logo2}
          alt="logo"
        ></Image>
      </Link>

      <NavarbarItems>
        {data.map(({ title, subMenu, link, isCard, actions }) => {
          return (
            <>
              <Item
                active={
                  asPath === link ||
                  subMenu?.map(({ link }) => link).includes(asPath)
                }
                key={title}
                path={asPath}
              >
                {subMenu ? (
                  <Title>
                    {title}
                    {subMenu && <ArrowDropDownIcon />}
                  </Title>
                ) : (
                  <Link href={link || "/"}>
                    <Title>{title}</Title>
                  </Link>
                )}
                {subMenu && (
                  <SubMenu>
                    {isCard ? (
                      <Card subMenu={subMenu.slice(0, 3)} actions={actions} />
                    ) : (
                      subMenu.map((item) => (
                        <Link href={item.link} key={item.title}>
                          <SubItem active={asPath === item.link}>
                            {item.title}
                          </SubItem>
                        </Link>
                      ))
                    )}
                  </SubMenu>
                )}
              </Item>
            </>
          );
        })}
      </NavarbarItems>
    </Wrapper>
  );
};

export default Navbar;
