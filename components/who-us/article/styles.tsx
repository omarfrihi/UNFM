import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { responsive } from "../../../styles/mixins";
export const Wrapper = styled.div`
  div:nth-of-type(odd) {
    flex-direction: row-reverse;
    background-color: transparent;
  }
  ${responsive.md`
  div:nth-of-type(odd)  {
    flex-direction: column-reverse;
    background-color: transparent;

  }

  `}
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-direction: column;
  padding: 2rem 0%;
  align-items: center;
  ${responsive.lg`
  padding: 2rem 0;

  `}
`;

export const ImageWrapper = styled.div`
  overflow: hidden;
  flex: 1;
  ${responsive.md`
  width:100%;
  flex:unset;
  `}

  border-radius: 0.5rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.blue[100]};
  text-align: justify;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.75rem;
  letter-spacing: -0.045rem;
`;

export const Content = styled.div`
display:flex:
flex-direction:column;
gap:2rem;
margin-bottom:1rem;
flex: 1;

`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.grey[200]};
  text-align: justify;
  font-family: Gilroy;
  font-size: 1rem;
  font-style: normal;
  font-weight: 350;
  line-height: 1.5rem;
  b {
    font-weight: 600;
  }
`;

export const Img = styled(Image)``;

export const ShowMore = styled("button")`
  background-color: ${({ theme }) => theme.colors.blue[100]};
  border-radius: 6.5rem;
  padding: 0.7rem 1rem;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: ${({ theme }) => theme.colors.white[200]};
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonText = styled.span`
  font-family: Gilroy;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  text-transform: capitalize;
`;

export const Article = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  ${responsive.md`
  flex-direction:column-reverse;
  gap: 2em;

  `};
  background-color: rgba(216, 150, 32, 0.06);

  padding: 2rem 15%;
  align-items: center;
  ${responsive.lg`
  padding: 2rem 7%;

  `}
`;
