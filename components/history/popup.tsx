import ReactMarkdown from "react-markdown";
import { Content, EndIcon, StartIcon } from "../who-us/history/styles";
import {
  ImagerWrapper,
  ImagerWrapperResponsive,
  PopupWrapper,
  Wrapper,
} from "./styles";
import Image from "next/image";
import Img from "../Image";
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: 0,
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialog-paperWidthFalse": {
    maxWidth: "60rem",
  },
}));
import { Media } from "../../strapi/types";
export type PopUpHistory = {
  image: Media;
  author: string;
  content: string;
};
const Popup = ({ content, image, author }: PopUpHistory) => {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={false}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <PopupWrapper>
            <ImagerWrapper>
              <Img src={image} objectFit="cover" layout="fill"></Img>
            </ImagerWrapper>
            <ImagerWrapperResponsive>
              <Image
                src={require("../../public/assets/article1.png")}
                width={250}
                alt=""
              ></Image>
            </ImagerWrapperResponsive>

            <Wrapper>
              <StartIcon>
                <Image
                  src={require("../../public/assets/start-quote.png")}
                  alt="logo"
                ></Image>
              </StartIcon>
              <div>
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
              <EndIcon>
                <Image
                  src={require("../../public/assets/end-quote.png")}
                  alt="logo"
                ></Image>
              </EndIcon>
            </Wrapper>
          </PopupWrapper>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default Popup;
