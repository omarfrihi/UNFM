import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Button, Buttons } from "./styles";

const Arrows = ({
  next,
  prev,
  className,
}: {
  next: any;
  prev: any;
  className?: string;
}) => {
  return (
    <Buttons>
      <Button onClick={prev} className={className}>
        <ArrowBackIcon fontSize="inherit" />
      </Button>
      <Button onClick={next} className={className}>
        <ArrowForwardIcon fontSize="inherit" />
      </Button>
    </Buttons>
  );
};
export default Arrows;
