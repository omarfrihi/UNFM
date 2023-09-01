import { TopbarProps } from "../components/Topbar";
import { ActivityType } from "../components/activities";
import { FooterProps } from "../components/footer";
import { NavbarProps } from "../components/navbar";
import { HomeProps } from "../pages";
import { WomenDayProps } from "../pages/8mars";
import { ActivitiesPageProps } from "../pages/activities";
import { ProgramsPageProps } from "../pages/programs";
import { ENavbarSections, ProgramProps } from "../pages/programs/[id]";
import { WhoUsProps } from "../pages/who-us";
import { categories } from "../utils/constants";
import {
  ExtractNested,
  IActivitiesPage,
  IActivity,
  IActivityType,
  IAssociation,
  IFooter,
  IHomepage,
  INavbar,
  IProgram,
  IProgramsPage,
  ISingleArticle,
  ISingleNumber,
  ITopbar,
  IWhoWeAre,
  IWomenDay,
  Media,
} from "./types";
import { IProgramNavbar } from "./types/api/ProgramNavbar";

export const strapiApiResponseExtractor = (result: any) => result.data.data;

export const articleFotmat = (
  data: ISingleArticle<ExtractNested<string, "list">>[]
) =>
  data.map(({ image, content }) => ({
    image,
    content,
  }));

export const numbersFormat = (
  data: ISingleNumber<ExtractNested<string, "list">>[]
) =>
  data.map(({ description, value, logo }) => ({
    logo,
    number: value,
    description,
  }));

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

const footerFormater = ({ attributes }: IFooter): FooterProps => ({
  data: {
    contactUs: attributes.contact_us,
    phoneNumbers: attributes.phone_numbers.map(({ number }) => number),
    email: attributes.email,
    copytight: attributes.copyright,
  },
});

const navbarFormater = ({ attributes }: INavbar): NavbarProps => ({
  data: attributes.items.map((item) => ({
    title: item.title,
    link: item.link,
    isCard: item.isRelation,
    subMenu: (item.isRelation
      ? item.programs.data.map(({ attributes, id }) => ({
          ...attributes,
          link: `/programs/${id}`,
        }))
      : item.sub_items
    ).map((subItem) => ({
      title: subItem.title,

      link: subItem.link,
      image: subItem.logo,
    })),
    actions: item.actions.map((action) => ({
      text: action.title,
      link: action.link,
    })),
  })),
});

const homepageFormater = ({ attributes }: IHomepage): HomeProps => {
  const {
    article,
    slider,
    numbers,
    objectifs,
    downloads,
    activities,
    programs,
    tools,
    medias,
    testimonies,
    partners,
    title,
  } = attributes;

  return {
    title,
    article: {
      action: {
        link: article.action_link,
        text: article.action,
      },
      data: {
        image: article.article.image,
        content: article.article.content,
      },
    },
    slider,
    numbers: {
      data: numbersFormat(numbers.list),
    },
    goals: {
      title: objectifs.title,
      data: objectifs.list.map(({ logo, content }) => ({
        content,
        image: logo,
      })),
    },
    programs: {
      data: programs.list.data.map(({ attributes, id }) => ({
        id,
        image: attributes.logo,
      })),
      title: programs.title,
    },

    tools: {
      data: tools.list.data.map(({ id, attributes }) => ({
        icon: attributes.logo,
        image: attributes.image,
        text: attributes.title,
        id,
      })),
      title: tools.title,
    },

    activities: {
      title: activities.title,
      action: activities.call_to_action,
      data: activities.list.data.map(
        ({ id, attributes: { cover, title, articles, activity_type } }) => ({
          cover,
          title,
          tag: activity_type.data.attributes.name,
          articles: articleFotmat(articles.list),
          action: activities.call_to_action,
          id,
        })
      ),
    },
    media: {
      data: medias.list.data.map(
        ({ id, attributes: { title, type, video_link, photo } }) => ({
          title,
          type,
          src: type === "image" ? photo : video_link,
          id,
        })
      ),

      title: medias.title,
      action: {
        text: medias.call_to_action,
        link: "",
      },
    },
    experiences: {
      title: testimonies.title,
      data: testimonies.list.data.map(({ attributes }) => ({
        personImage: attributes.image,
        name: attributes.name,
        fonction: attributes.fonction,
        text: attributes.content,
      })),
    },
    partners: {
      title: partners.title,
      data: partners.categories.map(({ title, list }) => ({
        title,
        partners: list.data.map(({ attributes }) => attributes.logo),
      })),
    },
    download: {
      downloadText: downloads.download_text,
      data: downloads.list.map(({ ios_link, android_link, poster, logo }) => ({
        androidLink: android_link,
        iOsLink: ios_link,
        icon: logo,
        poster,
      })),
    },
  };
};

const WhoWeAreFormater = ({ attributes }: IWhoWeAre): WhoUsProps => {
  const { articles, history, title, cover } = attributes;

  return {
    title,
    cover: {
      data: { image: cover, title, fullMode: false },
    },
    article: {
      data: articles.list.map(({ content, image }) => ({
        image,
        content,
      })),
    },
    history: {
      data: {
        title: history.title,
        content: history.summary,
        action: history.call_to_action,
      },
    },
  };
};

const WomenDayFormater = ({ attributes }: IWomenDay): WomenDayProps => {
  const { articles, activities, title, cover } = attributes;

  return {
    title,
    cover: {
      data: { image: cover, title, fullMode: false },
    },
    article: {
      data: articles.list.map(({ content, image }) => ({
        image,
        content,
      })),
    },
    activities: {
      title: activities.title,
      action: activities.call_to_action,
      data: activities.list.data.map(
        ({ id, attributes: { cover, title, articles, activity_type } }) => ({
          cover,
          title,
          tag: activity_type.data.attributes.name,
          articles: articleFotmat(articles.list),
          action: activities.call_to_action,
          id,
        })
      ),
    },
  };
};

const activitiesPageFormater = ({
  activityPage,
  activities,
  programs,
  activityTypes,
  associations,
}: {
  activityPage: IActivitiesPage;
  activities: IActivity[];
  programs: IProgram[];
  activityTypes: IActivityType[];
  associations: IAssociation[];
}): ActivitiesPageProps => {
  const {
    title,
    cover,
    action,
    search_placeholder,
    program_type_placeholder,
    activity_type_placholder,
    association_placeholder,
    womenday_placeholder,
  } = activityPage.attributes;
  return {
    title,
    cover: {
      data: { image: cover, title, fullMode: false },
    },
    activities: {
      filters: {
        selects: [
          {
            name: program_type_placeholder,
            options: programs.map(({ attributes, id }) => ({
              code: id.toString(),
              value: attributes.title,
            })),
          },
          {
            name: activity_type_placholder,
            options: activityTypes.map(({ attributes, id }) => ({
              code: id.toString(),
              value: attributes.name,
            })),
          },
          { name: womenday_placeholder, options: [] },
          {
            name: association_placeholder,
            options: associations.map(({ attributes, id }) => ({
              code: id.toString(),
              value: attributes.title,
            })),
          },
        ],
        search: search_placeholder,
      },
      data: activities.map(
        ({ id, attributes: { cover, title, articles, activity_type } }) => ({
          cover,
          title,
          tag: activity_type.data.attributes.name,
          articles: articleFotmat(articles.list),
          action,
          id,
        })
      ),
    },
  };
};

const activityFormater = ({ attributes, id }: IActivity): ActivityType => {
  const { cover, title, articles, activity_type } = attributes;
  return {
    cover,
    title,
    tag: activity_type.data.attributes.name,
    articles: articleFotmat(articles.list),
    id,
  };
};

const programsPageFormatter = ({
  programsPage,
  programs,
}: {
  programsPage: IProgramsPage;
  programs: IProgram[];
}): ProgramsPageProps => {
  const { cover, title } = programsPage.attributes;
  return {
    title,
    cover: { data: { image: cover, title, fullMode: false } },

    programs: {
      data: programs.map(({ attributes, id }) => ({
        id,
        image: attributes.logo,
        category: attributes.program_type.data.attributes.title,
      })),
    },
  };
};

const programFormatter = ({
  program: { id, attributes },
  sections: { attributes: sections },
}: {
  program: IProgram;
  sections: IProgramNavbar;
}): ProgramProps => {
  const getSection = (key: string) =>
    sections.sections.find(({ section }) => section === key);

  return {
    title: attributes.title,
    program: {
      articles: {
        data: articleFotmat(attributes.articles.list),
      },
      cover: {
        data: {
          image: attributes.cover,
          title: attributes.title,
          fullMode: false,
        },
      },
      numbers: {
        logo: attributes.logo,
        data: numbersFormat(attributes.numbers.list),
      },
      goals: {
        title: getSection(ENavbarSections.GOALS)?.title as string,
        data: attributes.objectifs.list.map(({ logo, content }) => ({
          content,
          image: logo,
        })),
      },
    },
    activities: {
      title: getSection(ENavbarSections.ACTIVITIES)?.title as string,
      action: getSection(ENavbarSections.ACTIVITIES)?.call_to_action as string,
      data: attributes.activities.data.map(
        ({ id, attributes: { cover, title, articles, activity_type } }) => ({
          cover,
          title,
          tag: activity_type.data.attributes.name,
          articles: articleFotmat(articles.list),
          id,
        })
      ),
    },

    media: {
      data: attributes.medias.data.map(
        ({ id, attributes: { title, type, video_link, photo } }) => ({
          title,
          type,
          src: type === "image" ? photo : video_link,
          id,
        })
      ),

      title: getSection(ENavbarSections.MEDIAS)?.label as string,
      action: {
        text: getSection(ENavbarSections.MEDIAS)?.call_to_action as string,
        link: "",
      },
    },
    experiences: {
      title: getSection(ENavbarSections.EXPERIENCES)?.title as string,
      data: attributes.testimonies.data.map(({ attributes }) => ({
        personImage: attributes.image,
        name: attributes.name,
        fonction: attributes.fonction,
        text: attributes.content,
      })),
    },
    partners: {
      title: getSection(ENavbarSections.PARTNERS)?.label as string,
      data: [
        {
          title: "",
          partners: attributes.partners.data.map(
            ({ attributes }) => attributes.logo
          ),
        },
      ],
    },
    sections: {
      id,
      sections: sections.sections.map(({ section, label }) => ({
        link: section,
        title: label,
      })),
    },
  };
};

export enum EStrapi_Single_Types {
  TOP_BAR = "topbar",
  FOOTER = "footer",
  NAVBAR = "navbar",
  HOME_PAGE = "homepage",
  WHO_WE_ARE = "who-we-are",
  WOMEN_DAY = "women-day",
  ACTIVITIES_PAGE = "activities-page",
  ACTIVITIES = "activities",
  PROGRAMS = "programs",
  ASSOCIATIONS = "associations",
  ACTIVITY_TYPES = "activity-types",
  ACTIVITY = "activities/:id",
  PROGRAM = "programs/:id",
  PROGRAMS_PAGE = "programs-page",
  PROGRAM_NAVBAR = "program-navbar",
}
export const formaters: { [key in EStrapi_Single_Types]?: any } = {
  [EStrapi_Single_Types.TOP_BAR]: topBarFormater,
  [EStrapi_Single_Types.FOOTER]: footerFormater,
  [EStrapi_Single_Types.NAVBAR]: navbarFormater,
  [EStrapi_Single_Types.HOME_PAGE]: homepageFormater,
  [EStrapi_Single_Types.WHO_WE_ARE]: WhoWeAreFormater,
  [EStrapi_Single_Types.WOMEN_DAY]: WomenDayFormater,
  [EStrapi_Single_Types.ACTIVITIES_PAGE]: activitiesPageFormater,
  [EStrapi_Single_Types.ACTIVITY]: activityFormater,
  [EStrapi_Single_Types.PROGRAMS_PAGE]: programsPageFormatter,
  [EStrapi_Single_Types.PROGRAM]: programFormatter,
};

export const urlBuilder = (media: Media) => ({
  alt: media.data.attributes.alternativeText,
  blurhash: media.data.attributes.blurhash,
  contentType: media.data.attributes.mime,
  src: `https://${process.env.NEXT_PUBLIC_STRAPI_IMAGES_DOMAIN}${media.data.attributes.url}`,
});

export const prepareData = (obj: any) => {
  Object.entries(obj).forEach(([key, value]) => {
    if (!!value && typeof value === "object") {
      prepareData(value);
    } else if (value === undefined) {
      obj[key] = null;
    }
  });
  return obj;
};
