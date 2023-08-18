import styled from "@emotion/styled";
import { responsive } from "../../styles/mixins";
export const Wrapper = styled.div`
  display: flex;
  padding: 0rem 16%;
  padding-top: 0.5rem;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
  position: absolute;
  width: 100%;
  ${responsive.md`
  display:none;
  `}
`;

export const NavarbarItems = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

export const SubMenu = styled.div`
  display: none;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white[200]};
  width: fit-content;
  flex-direction: column;
`;
export const Item = styled.div<{ active?: boolean }>`
  white-space: nowrap;
  position: relative;
  color: ${({ theme, active }) =>
    active ? theme.colors.green[200] : theme.colors.white[200]};
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
  text-underline-offset: 4px;
  font-family: Gilroy;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  :hover div {
    display: flex;
  }
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
`;

export const SubItem = styled(Item)`
  padding: 0.3rem 0.6rem;
  color: ${({ theme }) => theme.colors.grey[100]};
  :hover {
    background-color: ${({ theme }) => theme.colors.white[300]};
  }
`;
