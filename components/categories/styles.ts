import styled from "@emotion/styled";
import { responsive } from "../../styles/mixins";

export const Wrapper = styled.div`
  > div:nth-of-type(even) {
    background: rgba(49, 220, 132, 0.06);
  }

  display: flex;

  flex-direction: column;
`;

export const Category = styled.div`
  padding: 1.5rem 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  ${responsive.lg`
  padding: 1.5rem 20%;

  `}

  ${responsive.sm`
  padding: 1.5rem 10%;

  `}
`;

export const CategoryWrapper = styled.div`
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.blue[100]};
  background-color: ${({ theme }) => theme.colors.white[200]};
  height: 10rem;
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CategoriesList = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;
