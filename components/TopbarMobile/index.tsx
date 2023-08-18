import Image from "next/image";
import Logo from "../../public/assets/logo2.png";
import NavbarMobile from "../navbarMobile";
import { Container, Menu } from "./styles";

const TopbarMobile = () => (
  <Container>
    <Image width={60} height={60} src={Logo} alt="logo"></Image>
    <Menu />
    <NavbarMobile />
  </Container>
);

export default TopbarMobile;
