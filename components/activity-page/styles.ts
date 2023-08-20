import styled from "@emotion/styled";
import { responsive } from "../../styles/mixins";

export const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  padding: 2rem 7%;
  ${responsive.xs`
  padding: 2rem 3%;

  `}
`;

export const ActivityWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export const SingleActivity = styled.div`
  flex-basis: 50%;
  padding: 1rem 0rem;
  ${responsive.md`
  flex-basis: 100%;

  `}
`;
