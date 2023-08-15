import styled from "@emotion/styled";
import Arrows from "../Arrows";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  background-image: url("/assets/experience-cover.png");
  background-size: 100%;
  padding: 2rem 10%;
  opacity: 0.9;
`;
export const ExperiencesWrapper = styled.div`
  width: 60%;
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white[100]};
  text-align: center;
  font-family: Poppins;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Experience = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
`;

export const Name = styled.span`
  color: ${({ theme }) => theme.colors.white[100]};
  text-align: center;
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Fonction = styled.span`
  color: ${({ theme }) => theme.colors.green[200]};
  text-align: center;
  font-family: Poppins;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ImageWrapper = styled.div`
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StartContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
`;

export const EndContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
export const ContentText = styled.span`
  color: ${({ theme }) => theme.colors.white[200]};
  text-align: justify;
  font-family: Poppins;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
`;

export const StyledArrows = styled(Arrows)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white[200]};
  border: 1px solid ${({ theme }) => theme.colors.white[200]};
`;
