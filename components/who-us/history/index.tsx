import Button from "../../Button";
import Title from "../../title";
import Image from "next/image";
import { Content, EndIcon, StartIcon, Wrapper, Text } from "./styles";

const History = () => (
  <Wrapper>
    <Title>Notre histoire</Title>

    <Content>
      <StartIcon>
        <Image
          src={require("../../../public/assets/start-quote.png")}
          alt="logo"
        ></Image>
      </StartIcon>
      <div>
        <Text>
          Grâce à notre timeline, découvrez, en images, la riche histoire de
          l’UNFM, ainsi que ses multiples actions qui ont accompagné l’évolution
          de la situation des femmes au Maroc tout au long de ces cinquante
          dernières années.
        </Text>
        <Text>
          Présente sur la scène internationale et au Maroc, l’Union est, depuis
          1969, un acteur majeur de la défense des droits des femmes, de leur
          autonomisation et de la lutte pour l’éradication de toute forme de
          violence faites aux femmes et aux filles.
        </Text>
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
    <Button>Découvrir Notre Histoire</Button>
  </Wrapper>
);

export default History;
