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
import { WhoUsProps } from "../pages/who-us";
import { WomenDayProps } from "../pages/8mars";
import { ActivitiesPageProps } from "../pages/activities";
import { ActivityType } from "../components/activities";
import { ProgramsPageProps } from "../pages/programs";
import { ProgramProps } from "../pages/programs/[id]";
const strapiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
  },
});

export const getDocument = async (
  type: string,
  locale: string
): Promise<any> => {
  const result = await strapiClient.get(type, {
    params: { populate: "deep", locale },
  });

  return strapiApiResponseExtractor(result);
};

export const getFormattedDocument = async (
  type: EStrapi_Single_Types,
  locale: string,
  id?: number
): Promise<any> => {
  const result = await getDocument([type, id].join("/"), locale);
  return formaters[type](result);
};

export const getTopBar = (locale: string): Promise<TopbarProps> =>
  getFormattedDocument(EStrapi_Single_Types.TOP_BAR, locale);

export const getFooter = (locale: string): Promise<FooterProps> =>
  getFormattedDocument(EStrapi_Single_Types.FOOTER, locale);

export const getNavBar = (locale: string): Promise<NavbarProps> =>
  getFormattedDocument(EStrapi_Single_Types.NAVBAR, locale);

export const getHomepage = (locale: string): Promise<HomeProps> =>
  getFormattedDocument(EStrapi_Single_Types.HOME_PAGE, locale);

export const getWhoWeAre = (locale: string): Promise<WhoUsProps> =>
  getFormattedDocument(EStrapi_Single_Types.WHO_WE_ARE, locale);

export const getWomenDay = (locale: string): Promise<WomenDayProps> =>
  getFormattedDocument(EStrapi_Single_Types.WOMEN_DAY, locale);

export const getActivitiesPage = async (
  locale: string
): Promise<ActivitiesPageProps> => {
  const activityPage = await getDocument(
    EStrapi_Single_Types.ACTIVITIES_PAGE,
    locale
  );
  const activities = await getActivities(locale);
  const programs = await getPrograms(locale);
  const associations = await getDocument(
    EStrapi_Single_Types.ASSOCIATIONS,
    locale
  );
  const activityTypes = await getDocument(
    EStrapi_Single_Types.ACTIVITY_TYPES,
    locale
  );

  return formaters[EStrapi_Single_Types.ACTIVITIES_PAGE]({
    activities,
    programs,
    associations,
    activityTypes,
    activityPage,
  });
};

export const getActivity = (
  locale: string,
  id: number
): Promise<ActivityType> =>
  getFormattedDocument(EStrapi_Single_Types.ACTIVITY, locale, id);

export const getActivities = async (locale: string) =>
  getDocument(EStrapi_Single_Types.ACTIVITIES, locale);

export const getPrograms = async (locale: string) =>
  getDocument(EStrapi_Single_Types.PROGRAMS, locale);

export const getProgramsPage = (locale: string): Promise<ProgramsPageProps> => {
  const programPage = getDocument(EStrapi_Single_Types.PROGRAMS_PAGE, locale);
  const programs = getPrograms(locale);

  return formaters[EStrapi_Single_Types.PROGRAMS_PAGE]({
    programPage,
    programs,
  });
};

export const getProgram = (locale: string, id: number): Promise<ProgramProps> =>
  getFormattedDocument(EStrapi_Single_Types.PROGRAM, locale, id);
