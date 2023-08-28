import axios from "axios";
import { TopbarProps } from "../components/Topbar";
import {
  strapiApiResponseExtractor,
  EStrapi_Single_Types,
  formaters,
} from "./utils";
import { FooterProps } from "../components/footer";
import { NavbarProps } from "../components/navbar";
import { HomeProps } from "../pages";
const strapiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
  },
});
export const getSingleDocument = async (
  type: EStrapi_Single_Types,
  locale: string
): Promise<any> => {
  const result = await strapiClient.get(type, {
    params: { populate: "deep", locale },
  });
  return formaters[type](strapiApiResponseExtractor(result));
};

export const getTopBar = (locale: string): Promise<TopbarProps> =>
  getSingleDocument(EStrapi_Single_Types.TOP_BAR, locale);

export const getFooter = (locale: string): Promise<FooterProps> =>
  getSingleDocument(EStrapi_Single_Types.FOOTER, locale);

export const getNavBar = (locale: string): Promise<NavbarProps> =>
  getSingleDocument(EStrapi_Single_Types.NAVBAR, locale);

export const getHomepage = (locale: string): Promise<HomeProps> =>
  getSingleDocument(EStrapi_Single_Types.HOME_PAGE, locale);
