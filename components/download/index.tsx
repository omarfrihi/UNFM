import { Actions, Application, Wrapper, Text, Buttons } from "./styles";
import Image from "next/image";
const Download = () => (
  <Wrapper>
    <Application>
      <Actions>
        <Image
          src={require("../../public/assets/unfm-app-logo.png")}
          alt="unfm-logo"
          height={100}
        ></Image>
        <Buttons>
          <Text>{`Télécharger l'Application`}</Text>
          <Image
            src={require("../../public/assets/appstore.png")}
            alt="app-store"
            height={40}
          ></Image>
          <Image
            src={require("../../public/assets/googleplay.png")}
            alt="google-play"
            height={40}
          ></Image>
        </Buttons>
      </Actions>
      <Image
        src={require("../../public/assets/unfm-app.png")}
        alt="unfm"
        height={300}
      ></Image>
    </Application>

    <Application>
      <Image
        src={require("../../public/assets/with-you-app.png")}
        alt="unfm"
        height={300}
      ></Image>
      <Actions>
        <Image
          src={require("../../public/assets/withyou-app-logo.png")}
          alt="unfm-logo"
          height={100}
        ></Image>
        <Buttons>
          <Text>{`Télécharger l'Application`}</Text>
          <Image
            src={require("../../public/assets/appstore.png")}
            alt="app-store"
            height={40}
          ></Image>
          <Image
            src={require("../../public/assets/googleplay.png")}
            alt="google-play"
            height={40}
          ></Image>
        </Buttons>
      </Actions>
    </Application>
  </Wrapper>
);

export default Download;
