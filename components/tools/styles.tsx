import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 45, 131, 0.06) 0%,
    rgba(0, 45, 131, 0.06) 100%
  );
  padding: 3rem 15%;
  display: flex;
  justify-content: center;
  gap: 6rem;
  align-items: center;
`;

export const ToolsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Tool = styled.div<{ image: any }>`
  background-size: 100%;
  background-image: url("${({ image }) => image}");
  opacity: 0.8;
  width: 190.5px;
  height: 254px;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: center;
  justify-content: center;
  padding: 0rem 0.5rem;
  cursor: pointer;
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.colors.white[200]};
  text-align: center;
  font-family: Gilroy;
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem;
`;
