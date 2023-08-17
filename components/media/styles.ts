import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 15%;
  gap: 2rem;
  background: linear-gradient(
    180deg,
    rgba(0, 45, 131, 0.06) 0%,
    rgba(0, 45, 131, 0.06) 100%
  );
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
  flex: 1;
  max-width: 400px;
`;
export const MedialTitleWrapper = styled.div`
  display: flex;
  gap: 0.6rem;
  color: ${({ theme }) => theme.colors.blue[100]};
  font-size: 1rem;
  align-items: flex-start;
  cursor: pointer;
`;

export const Poster = styled.div<{ image: any }>``;

export const ImageContainer = styled.div`
  height: 290px;
  position: relative;
  width: 400px;
`;
