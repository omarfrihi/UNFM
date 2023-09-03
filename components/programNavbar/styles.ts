import styled from "@emotion/styled";
import { responsive } from "../../styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0rem;
  ${responsive.md`
  display:none;
  `}
`;

export const Items = styled.div`
  display: flex;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.white[200]};
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
  align-items: center;
  gap: 1.4rem;
  padding: 0.5rem 2rem;
`;

export const Title = styled.span<{ active: boolean }>`
  color: ${({ theme, active }) =>
    active ? theme.colors.green[200] : theme.colors.grey[200]};
  text-align: center;

  font-size: 0.9rem;
  font-style: normal;
  font-weight: 600;
`;

export const UnderLine = styled.div<{ active: boolean }>`
  margin: 0rem 35%;
  border-bottom: 1px solid
    ${({ theme, active }) => (active ? theme.colors.green[200] : "transparent")};
`;

export const Separator = styled.div`
  height: 1rem;
  width: 1px;
  background-color: #d6d6d6;
`;
