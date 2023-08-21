import styled from "@emotion/styled";

import Slider from "react-slick";
import { responsive } from "../../styles/mixins";

export const Wrapper = styled.div`
  padding: 4rem 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  ${responsive.xl`
  padding: 4rem 5%;
  gap: 1rem;

  
  `}

  ${responsive.lg`
flex-direction:column;
gap: 2rem;

  
  `}
`;

export const BottomArrows = styled.div`
  display: none;
  ${responsive.lg`
display:block;
  
  `}
`;

export const LeftArrows = styled.div`
  display: block;
  ${responsive.lg`
  display:none;
  
  `}
`;

export const Actions = styled.div`
  padding: 0rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.blue[100]};
  text-align: center;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0.2rem;
`;

export const UnderLine = styled.div`
  margin: 0rem 20%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.green[200]};
`;
export const Buttons = styled.div`
  display: flex;
  gap: 1.3rem;
`;
export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white[200]};
  color: ${({ theme }) => theme.colors.blue[100]};
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.blue[100]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
`;

export const List = styled.div`
  width: 100%;
  padding: 0rem;
  overflow-x: hidden;
`;

export const Slide = styled.div`
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.blue[100]};
  height: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const SlideWrapper = styled.div`
  padding: 1rem;
`;

export const Carousel = styled(Slider)``;
