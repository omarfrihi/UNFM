import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { ButtonText, ShowMore } from "./styles";
const Button = ({
  children,
  href = "",
}: {
  children?: string;
  href?: string;
}) => (
  <Link href={href}>
    <ShowMore>
      <ButtonText>{children}</ButtonText>
      <ArrowForwardIcon color="inherit" fontSize="inherit" />
    </ShowMore>
  </Link>
);

export default Button;
