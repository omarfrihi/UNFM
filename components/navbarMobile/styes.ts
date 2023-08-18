import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
export const Item = styled.div<{ active?: boolean }>`
  white-space: nowrap;
  color: ${({ theme, active }) =>
    active ? theme.colors.green[200] : theme.colors.grey[200]};
  font-family: Gilroy;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem;
  position: relative;
`;

export const Close = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  top: 5px;
  left: 5px;
`;
