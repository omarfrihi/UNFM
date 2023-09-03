import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { responsive } from "../../styles/mixins";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  padding: 4rem 15%;
  align-items: center;
  border-radius: 0rem 0rem 0rem 16rem;
  background: linear-gradient(
    180deg,
    rgba(0, 45, 131, 0) 0%,
    rgba(0, 45, 131, 0.06) 100%
  );
  ${responsive.lg`
  padding: 4rem 7%;

  `}

  ${responsive.md`
  flex-direction:column;
  gap: 2em;
  border-radius: 0rem 0rem 0rem 8rem;


  `}
`;

export const ImageWrapper = styled.div`
  flex: 1;
  ${responsive.md`
  width:100%;
  flex:unset;
  `}
  display:flex;
  align-items: center;
  justify-content: center;
  img {
    width: 180px !important;
  }
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
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  text-transform: capitalize;
`;
