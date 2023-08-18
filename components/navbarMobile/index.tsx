import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Menu } from "../navbar";
import { Title } from "../navbar/styles";
import { Close, Item, Wrapper } from "./styes";

const NavbarMobile = ({ open, setOpen }: any) => {
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)} direction="right">
        <Wrapper>
          {Menu.map(({ title, subMenu }, index) => (
            <>
              <Item active={index === 0} key={title}>
                <Title>{title}</Title>
              </Item>
            </>
          ))}
          <Close onClick={() => setOpen(false)} />
        </Wrapper>
      </Drawer>
    </>
  );
};

export default NavbarMobile;
