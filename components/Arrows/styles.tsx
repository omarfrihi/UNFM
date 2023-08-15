import styled from "@emotion/styled";

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
