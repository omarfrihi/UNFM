import styled from "@emotion/styled";
import { responsive } from "../../styles/mixins";
import MenuIcon from "@mui/icons-material/Menu";
export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white[100]};
  padding: 0.2rem 5%;
  justify-content: space-between;
  display: none;
  ${responsive.md`
  display:flex;

  
  `}
`;

export const Menu = styled(MenuIcon)`
  color: ${({ theme }) => theme.colors.grey[200]};

  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;
