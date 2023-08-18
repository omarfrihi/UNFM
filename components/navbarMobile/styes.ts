import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { responsive } from "../../styles/mixins";

export const EndIcon = styled(ArrowDropDownIcon)`
  color: ${({ theme }) => theme.colors.grey[200]};
`;
export const Item = styled.div<{ active?: boolean }>`
  color: ${({ theme, active }) =>
    active ? theme.colors.green[200] : theme.colors.grey[200]};
  font-family: Gilroy;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;

export const SubItem = styled.div<{ active?: boolean }>`
  color: ${({ theme, active }) =>
    active ? theme.colors.green[200] : theme.colors.grey[200]};
  font-family: Gilroy;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;
export const SubItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 2rem;
  position: relative;
  width: 300px;
`;

export const Close = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  top: 5px;
  left: 5px;
`;
