import styled from "@emotion/styled";
import { responsive } from "../../styles/mixins";
import CircleIcon from "@mui/icons-material/Circle";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background-image: url("/assets/goals.png");
  background-size: cover;
  padding: 4rem 10%;
  background-repeat: no-repeat;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white[200]};
  text-align: center;
  font-family: Gilroy;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0.2rem;
`;

export const UnderLine = styled.div`
  margin: 0rem 20%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white[200]};
`;

export const Card = styled.div`
  margin: 1rem 0rem;
  height: 100%;
  align-items: stretch;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  background: linear-gradient(
    0deg,
    rgba(215, 215, 215, 0.85) 0%,
    rgba(255, 255, 255, 0.85) 100%
  );
`;
export const CardWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: stretch;
  position: relative;
  flex: 1;
`;
export const CircleWrapper = styled.div<{ direction: Direction }>`
  display: flex;
  align-items: center;
  transform: translateX(
    ${({ direction }) => (direction === Direction.RIGHT ? `-25px` : "25px")}
  );
  ${responsive.sm`
  display:none;
  `}
`;

export enum Direction {
  LEFT = "left",
  RIGHT = "right",
}
export const Circle = styled(CircleIcon)<{
  clr?: string;
}>(({ clr }) => ({
  color: clr,
  fontSize: "15px",
}));

export const Bar = styled.div<{ color?: string; invisible?: boolean }>`
  width: 2px;
  height: 100%;
  flex: 1;
  background-color: ${({ color, invisible = false }) =>
    invisible ? "transparent" : color};
`;

export const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${responsive.sm`
  display:none;
  `}
`;

export const CardsContainer = styled.div<{ direction: Direction }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  transform: translateX(
    ${({ direction }) => (direction === Direction.RIGHT ? `-` : "")}32px
  );
  ${responsive.sm`
  transform :unset;
  `}
`;

export const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  ${responsive.sm`
  flex-direction:column;
  `}
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.colors.blue[200]};
  text-align: justify;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
