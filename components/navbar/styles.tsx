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

  ${responsive.xl`
  padding: 0rem 10%;
  `}
  ${responsive.lg`
  padding: 0rem 5%;
  `}
`;

export const NavarbarItems = styled.div`
  display: flex;
  align-items: center;
  gap: 2.15rem;
  ${responsive.lg`
  gap: 1.8rem;
  `}
`;

export const SubMenu = styled.div`
  box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white[200]};
  width: fit-content;
  right: 0;
  flex-direction: column;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s linear;
  overflow: hidden;
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

  font-size: 0.85rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  :hover div {
    visibility: visible;
    opacity: 1;
  }

  ${responsive.lg`
  font-size: 0.8rem;
  `}
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1rem;
  ${responsive.lg`
  font-size: 0.8rem;
  `}
`;

export const SubItem = styled(Item)`
  text-decoration: none;
  padding: 0.7rem 0.7rem;
  color: ${({ theme, active }) =>
    active ? theme.colors.green[200] : theme.colors.grey[400]};
  :hover {
    background-color: ${({ theme }) => theme.colors.white[100]};
    overflow: hidden;
  }
`;

export const ProgramsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.1);
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
  height: 8rem;
  width: 8rem;
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
`;
