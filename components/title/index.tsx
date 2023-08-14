import { UnderLine, Title as StyleTitle } from "./styles";

const Title = ({ children }: { children: string }) => (
  <div>
    <StyleTitle>{children}</StyleTitle>
    <UnderLine />
  </div>
);

export default Title;
