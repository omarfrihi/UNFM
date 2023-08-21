import { UnderLine, Title as StyleTitle, Wrapper } from "./styles";

const Title = ({ children }: { children: string }) => (
  <Wrapper>
    <StyleTitle>{children}</StyleTitle>
    <UnderLine />
  </Wrapper>
);

export default Title;
