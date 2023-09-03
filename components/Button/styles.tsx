import styled from "@emotion/styled";

export const ShowMore = styled("div")`
  background-color: ${({ theme }) => theme.colors.blue[100]};
  border-radius: 6.5rem;
  padding: 0.7rem 1.3rem;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: ${({ theme }) => theme.colors.white[200]};
  cursor: pointer;
  width: fit-content !important;
`;

export const ButtonText = styled.span`
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  text-transform: capitalize;
`;
