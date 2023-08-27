import { TopbarProps } from "../components/Topbar";
import { ITopbar } from "./types";

export const strapiApiResponseExtractor = (result: any) => result.data.data;

const topBarFormater = ({ attributes }: ITopbar): TopbarProps => ({
  data: {
    callUs: attributes.call_us,
    phoneNumber: attributes.phone_number,
    download: {
      text: attributes.dowload,
      appName: attributes.app_name,
      link: attributes.app_link,
    },
  },
});

export enum EStrapi_Single_Types {
  TOP_BAR = "topbar",
}
export const formaters = {
  [EStrapi_Single_Types.TOP_BAR]: topBarFormater,
};
