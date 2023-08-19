import styled from "@emotion/styled";
import { responsive } from "../../../styles/mixins";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 45rem;
  ${responsive.md`
  height: 30rem;

  `}

  ${responsive.xs`
  height: 22rem;

  `}
`;

export const LoogWrapper = styled("div")`
  width: 30%;
  height: 100%;
  background: rgba(242, 242, 242, 0.97);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageWrapper = styled("div")`
  width: 30%;
  ${responsive.md`
  width: 50%;

  `}
  height: 100%;
  position: relative;
`;
