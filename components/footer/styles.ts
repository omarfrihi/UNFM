import styled from "@emotion/styled";
import { responsive } from "../../styles/mixins";

export const Container = styled.div`
  height: 2.725rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green[200]};
  padding: 0rem 10%;
  justify-content: space-between;
  ${responsive.lg`
  padding: 0rem 5%;

  
  `}
`;

export const ContactUs = styled.span`
  font-family: Poppins;
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  color: ${({ theme }) => theme.colors.white[200]};
`;

export const Text = styled(ContactUs)`
  font-weight: 400;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
