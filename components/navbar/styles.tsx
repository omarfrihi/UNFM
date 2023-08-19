import styled from "@emotion/styled";
import { responsive } from "../../styles/mixins";
export const Wrapper = styled.div<{ path?: string }>`
  display: flex;
  padding: 0rem 16%;
  padding-top: 0.5rem;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
  position: ${({ path }) => (path === "/" ? "absolute" : "relative")};
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
  box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  display: none;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white[200]};
  width: fit-content;
  right: 0;
  flex-direction: column;
`;
export const Item = styled.div<{ active?: boolean; path?: string }>`
  white-space: nowrap;
  position: relative;
  color: ${({ theme, active, path }) =>
    active
      ? theme.colors.green[200]
      : path === "/"
      ? theme.colors.white[200]
      : theme.colors.grey[400]};
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
  text-underline-offset: 4px;
  font-family: Gilroy;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  :hover div {
    display: flex;
  }
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
`;

export const SubItem = styled(Item)`
  border-radius: 0.5rem;
  padding: 0.5rem 0.7rem;
  color: ${({ theme }) => theme.colors.grey[400]};
  :hover {
    background-color: ${({ theme }) => theme.colors.white[300]};
  }
`;

export const ProgramsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
`;

export const ProgramsContent = styled("div")`
  display: flex;
  gap: 1.5rem;
`;

export const Buttons = styled("div")`
  display: flex;
  gap: 1.5rem;
`;

export const Slide = styled.div`
  border-radius: 0.5rem;
  height: 10rem;
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`;

export const SlideWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.03);
`;
