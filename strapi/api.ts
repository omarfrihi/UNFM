import axios from "axios";
import { TopbarProps } from "../components/Topbar";
import {
  strapiApiResponseExtractor,
  EStrapi_Single_Types,
  formaters,
} from "./utils";
const strapiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
  },
});
export const getSingleDocument = async (
  type: EStrapi_Single_Types
): Promise<any> => {
  const result = await strapiClient.get(type);
  return formaters[type](strapiApiResponseExtractor(result));
};

export const getTopBar = (): Promise<TopbarProps> =>
  getSingleDocument(EStrapi_Single_Types.TOP_BAR);
