import Button from "../../Button";
import Title from "../../title";
import Image from "next/image";
import { Content, EndIcon, StartIcon, Wrapper, Text } from "./styles";

const History = ({
  data: { title, content, action },
}: {
  data: { title: string; content: string[]; action: string };
}) => (
  <Wrapper>
    <Title>{title}</Title>

    <Content>
      <StartIcon>
        <Image
          src={require("../../../public/assets/start-quote.png")}
          alt="logo"
        ></Image>
      </StartIcon>
      <div>
        {content.map((x) => (
          <Text key={x}>{x}</Text>
        ))}
      </div>
      <EndIcon>
        <Image
          src={require("../../../public/assets/end-quote.png")}
          alt="logo"
        ></Image>
      </EndIcon>
    </Content>

    <Image
      src={require("../../../public/assets/logo2.png")}
      alt="logo"
      width={120}
    ></Image>
    <Button href="hsitory">{action}</Button>
  </Wrapper>
);

export default History;
