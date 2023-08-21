import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Drawer,
} from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";
import "react-modern-drawer/dist/index.css";
import {
  Close,
  EndIcon,
  Item,
  SubItem,
  SubItems,
  Wrapper,
  Title,
} from "./styes";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useRouter } from "next/router";
import { useWindowSize } from "@uidotdev/usehooks";
import { NavbarProps } from "../navbar";

const NavbarMobile = ({
  open,
  setOpen,
  data,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
} & NavbarProps) => {
  const { asPath } = useRouter();
  const { width } = useWindowSize();

  useEffect(() => {
    if (width && width > 992) setOpen(false);
  }, [width]);
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
        <Wrapper>
          {data.map(({ title, subMenu, link }) => (
            <>
              <Item active={asPath === link} key={title}>
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
                      <Title
                        active={subMenu
                          ?.map(({ link }) => link)
                          .includes(asPath)}
                      >
                        {title}
                      </Title>
                    </AccordionSummary>

                    <AccordionDetails>
                      <SubItems>
                        {subMenu.map(({ link, title }) => (
                          <Link href={link || "/"} key={title}>
                            <SubItem active={asPath === link}>{title}</SubItem>
                          </Link>
                        ))}
                      </SubItems>
                    </AccordionDetails>
                  </Accordion>
                ) : (
                  <Link href={link || "/"}>{title}</Link>
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
