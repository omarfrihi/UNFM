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

export const UnderLine = styled.div`
  margin: 0rem 20%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.green[200]};
`;
