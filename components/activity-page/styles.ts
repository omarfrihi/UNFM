import styled from "@emotion/styled";
import { Input, OutlinedInput, Select, TextField } from "@mui/material";
import { responsive } from "../../styles/mixins";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  padding: 2rem 7%;
  ${responsive.xs`
  padding: 2rem 3%;

  `}
`;

export const ActivityWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export const SingleActivity = styled.div`
  flex-basis: 50%;
  padding: 1rem 0rem;
  ${responsive.md`
  flex-basis: 100%;

  `}
`;
export const Filter = styled("div")`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const Search = styled(OutlinedInput)`
  border-radius: 6.5rem;
  background: ${({ theme }) => theme.colors.white[200]};
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
  border: none;
  height: 2.3rem;
  width: 15rem;
  input {
    padding: 0.5rem;

    font-size: 0.8rem;
    ::placeholder {
      color: rgba(17, 17, 17, 0.48);

      font-size: 0.8rem;
      font-style: normal;
      font-weight: 500;
      text-transform: capitalize;
    }
  }
`;

export const SelectFilter = styled(Select)`
  border-radius: 6.5rem;
  height: 2.3rem;
  & .MuiOutlinedInput-input {
    color: rgba(17, 17, 17);

    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.blue[100]};

    font-style: normal;
    font-weight: 600;
    text-transform: capitalize;
  }
`;

export const SearchLogo = styled(SearchIcon)`
  color: rgba(17, 17, 17, 0.48);
`;

export const Arrow = styled(ArrowDropDownIcon)`
  color: ${({ theme }) => theme.colors.blue[100]};
`;
