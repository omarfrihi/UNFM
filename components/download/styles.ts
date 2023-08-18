import styled from "@emotion/styled";
import { responsive } from "../../styles/mixins";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 15%;
  gap: 2rem;
  background: linear-gradient(
    180deg,
    rgba(0, 45, 131, 0.06) 0%,
    rgba(0, 45, 131, 0.06) 100%
  );

  ${responsive.md`
  padding: 3rem 0%;

  flex-direction:column;

  `}
`;

export const Application = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

export const Text = styled.span`
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
