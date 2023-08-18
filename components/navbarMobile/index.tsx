import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Drawer,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import "react-modern-drawer/dist/index.css";
import { Menu } from "../navbar";
import { Title } from "../navbar/styles";
import { Close, EndIcon, Item, SubItem, SubItems, Wrapper } from "./styes";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useRouter } from "next/router";
import { useWindowSize } from "@uidotdev/usehooks";

const NavbarMobile = ({ open, setOpen }: any) => {
  const { asPath } = useRouter();
  const { width } = useWindowSize();
  useEffect(() => {
    setOpen(false);
  }, [asPath]);

  useEffect(() => {
    if (width && width > 992) setOpen(false);
  }, [width]);
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
        <Wrapper>
          {Menu.map(({ title, subMenu, link }, index) => (
            <>
              <Item active={index === 0} key={title}>
                {subMenu ? (
                  <Accordion
                    sx={{
                      boxShadow: "none !important",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<EndIcon />}
                      sx={{
                        minHeight: "unset",

                        "& .MuiPaper-root-MuiAccordion-root": {
                          border: "none",
                        },
                        padding: 0,
                        "& .MuiAccordionSummary-content": {
                          margin: 0,
                          border: "none",
                        },
                      }}
                    >
                      <Title>{title}</Title>
                    </AccordionSummary>

                    <AccordionDetails>
                      <SubItems>
                        {subMenu.map(({ link, title }) => (
                          <Link href={link || ""} key={title}>
                            <SubItem>{title}</SubItem>
                          </Link>
                        ))}
                      </SubItems>
                    </AccordionDetails>
                  </Accordion>
                ) : (
                  <Link href={link || ""}>
                    <Title>{title}</Title>
                  </Link>
                )}
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
