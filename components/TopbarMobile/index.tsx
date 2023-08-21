import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../public/assets/logo2.png";
import { NavbarProps } from "../navbar";
import NavbarMobile from "../navbarMobile";
import { Container, Menu } from "./styles";

const TopbarMobile = ({ data }: NavbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container>
        <Link href="/">
          <Image width={60} src={Logo} alt="logo"></Image>
        </Link>
        <Menu onClick={() => setOpen(true)} />
      </Container>
      <NavbarMobile open={open} setOpen={setOpen} data={data} />
    </>
  );
};

export default TopbarMobile;
