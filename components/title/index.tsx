import { UnderLine, Title as StyleTitle, Wrapper } from "./styles";

const Title = ({ children, color }: { children: string; color?: string }) => (
  <Wrapper>
    <StyleTitle>{children}</StyleTitle>
    <UnderLine clr={color} />
  </Wrapper>
);

export default Title;
