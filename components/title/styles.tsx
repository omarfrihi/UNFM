import styled from "@emotion/styled";

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.blue[100]};
  text-align: center;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0.2rem;
`;

export const UnderLine = styled.div<{ clr?: string }>`
  margin: 0rem 20%;
  border-bottom: 1px solid ${({ theme, clr }) => clr || theme.colors.green[200]};
`;

export const Wrapper = styled.div`
  max-width: 60rem;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0rem;
`;
