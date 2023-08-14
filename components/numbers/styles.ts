import styled from "@emotion/styled";

export const Box = styled.div`
  border-radius: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.grey[200]};
  backdrop-filter: blur(6px);
  padding: 3rem 3rem 2rem 3rem;
  position: relative;
  gap: 1.5rem;
  align-items: center;
  justify-contenr: center;
  display: flex;
`;

export const Wrapper = styled.div`
  padding: 8rem 10rem;
`;

export const ImgWrapper = styled.div`
  position: absolute;
  top: -40px;
  left: 46%;
  background-color: ${({ theme }) => theme.colors.white[200]};
`;

export const NumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  flex: 1;
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
