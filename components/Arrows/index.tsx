import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Button, Buttons } from "./styles";

const Arrows = ({ next, prev }: { next: any; prev: any }) => {
  return (
    <Buttons>
      <Button onClick={prev}>
        <ArrowBackIcon fontSize="inherit" />
      </Button>
      <Button onClick={next}>
        <ArrowForwardIcon fontSize="inherit" />
      </Button>
    </Buttons>
  );
};
export default Arrows;
