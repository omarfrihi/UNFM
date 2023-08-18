import styled from "@emotion/styled";
import { responsive } from "../../styles/mixins";

export const Wrapper = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 45, 131, 0.06) 0%,
    rgba(0, 45, 131, 0.06) 100%
  );
  padding: 3rem 15%;
  display: flex;
  justify-content: center;
  gap: 6rem;
  align-items: center;
  ${responsive.lg`
  gap:2rem;
  padding: 3rem 10%;

  `}

  ${responsive.md`
  
  flex-direction: column-reverse;
  padding: 3rem 5%;


  `}
`;

export const ToolsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  ${responsive.sm`
  
  flex-wrap :wrap;
justify-content:center;

  `}
`;

export const Tool = styled.div`
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  border-radius: 0.5rem;
  z-index: 2;
  opacity: 0.8;
  width: 190.5px;
  height: 254px;
`;

export const ContentWrapper = styled.div`
  position: absolute;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;
  padding: 0rem 0.5rem;
  cursor: pointer;
  top: 0;
  z-index: 3;
  height: 100%;
  width: 100%;
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.colors.white[200]};
  text-align: center;
  font-family: Gilroy;
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem;
`;
