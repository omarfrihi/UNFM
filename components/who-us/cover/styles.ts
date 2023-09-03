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
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled("span")`
  color: #2e2e2e;
  text-align: center;

  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: capitalize;
  ${responsive.md`
  font-size: 1.2rem;

  `}
`;
