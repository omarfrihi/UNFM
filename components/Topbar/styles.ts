import styled from "@emotion/styled";
import { responsive } from "../../styles/mixins";

export const Container = styled.div`
  height: 2.725rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white[100]};
  padding: 0rem 10%;
  justify-content: space-between;
  ${responsive.lg`
  padding: 0rem 5%;

  
  `}

  ${responsive.md`
  display:none;

  
  `}
`;

export const Text = styled.span`
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  color: ${({ theme }) => theme.colors.grey[100]};
`;

export const DownloadText = styled(Text)`
  color: ${({ theme }) => theme.colors.green[100]};
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
  gap: 4.24rem;
`;

export const WithYouText = styled.span`
  color: #409f6e;
  font-family: Tajawal;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const LangWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
`;

export const Lang = styled.span<{ active?: boolean }>`
  color: ${({ theme, active }) =>
    active ? theme.colors.green[200] : theme.colors.grey[100]};

  font-size: 0.9em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;
