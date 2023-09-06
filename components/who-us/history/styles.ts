import styled from "@emotion/styled";
import { responsive } from "../../../styles/mixins";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background-image: url("/assets/history.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 2rem 30%;
  background-blend-mode: luminosity;
  ${responsive.xl`
  padding: 2rem 20%;

  `}

  ${responsive.md`
  padding: 2rem 7%;

  `}
`;

export const Content = styled.div`
  padding: 0rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EndIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const StartIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 0rem 2rem;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.blue[100]};
  text-align: justify;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
