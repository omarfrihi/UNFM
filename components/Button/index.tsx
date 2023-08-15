import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ButtonText, ShowMore } from "./styles";
const Button = ({ children }: { children: string }) => (
  <ShowMore>
    <ButtonText>{children}</ButtonText>
    <ArrowForwardIcon color="inherit" fontSize="inherit" />
  </ShowMore>
);

export default Button;
