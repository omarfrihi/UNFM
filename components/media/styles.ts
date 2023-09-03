import styled from "@emotion/styled";
import { alpha } from "@mui/material";

export const Wrapper = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 5%;
  gap: 2rem;

  ${({ color }) =>
    color
      ? `
    border-radius: 18.75rem;
   
    background: linear-gradient(
      180deg,
      ${alpha(color, 0.06)} 0%,
      ${alpha(color, 0.0)} 100%
    );
    @media (max-width: 1200px) {
      border-radius: 12rem;

    }

    @media (max-width: 767px) {
      border-radius: 8rem;

    }

    @media (max-width: 540px) {
      border-radius: 5rem;

    }
  

`
      : `
    background: linear-gradient(
      180deg,
      rgba(0, 45, 131, 0.06) 0%,
      rgba(0, 45, 131, 0.06) 100%
    );
    `}
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.blue[100]};
  text-align: justify;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2rem; /* 100% */
`;

export const Medias = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MediaContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  position: relative;
  width: 300px;
`;
export const MedialTitleWrapper = styled.div`
  display: flex;
  gap: 0.6rem;
  color: ${({ theme }) => theme.colors.blue[100]};
  font-size: 1rem;
  align-items: flex-start;
  cursor: pointer;
  width: inherit;
`;

export const Poster = styled.div<{ image: any }>``;

export const ImageContainer = styled.div`
  height: 290px;
  position: relative;
  width: 300px;
`;
