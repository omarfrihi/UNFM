import styled from "@emotion/styled";
import { responsive } from "../../styles/mixins";

export const Box = styled.div`
  border-radius: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.grey[200]};
  backdrop-filter: blur(6px);
  padding: 5rem 3rem 2rem 3rem;
  gap: 2.5rem;
  justify-contenr: center;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: -1;
`;

export const Wrapper = styled.div`
  position: relative;
  padding: 3rem 15%;
  ${responsive.lg`
  padding: 4rem 10%;

  
  `}
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;
  transform: translateY(60px);
  display: flex;
  justify-content: center;
  img {
    background-color: ${({ theme }) => theme.colors.white[200]};
  }
`;

export const NumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  flex: 1;
  ${responsive.md`
  flex: 27%;
  `}
  ${responsive.xs`
  flex: 20%;
  `}
`;

export const Number = styled.span`
  color: ${({ theme }) => theme.colors.green[300]};
  text-align: center;
  font-family: Gilroy;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.25rem;
  letter-spacing: 0.1875rem;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.colors.grey[200]};
  text-align: center;
  font-family: Gilroy;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
