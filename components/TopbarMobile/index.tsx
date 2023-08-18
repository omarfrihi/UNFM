import Image from "next/image";
import { useState } from "react";
import Logo from "../../public/assets/logo2.png";
import NavbarMobile from "../navbarMobile";
import { Container, Menu } from "./styles";

const TopbarMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container>
        <Image width={60} height={60} src={Logo} alt="logo"></Image>
        <Menu onClick={() => setOpen(true)} />
      </Container>
      <NavbarMobile open={open} setOpen={setOpen} />
    </>
  );
};

export default TopbarMobile;
