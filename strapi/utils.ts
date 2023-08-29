import { TopbarProps } from "../components/Topbar";
import { FooterProps } from "../components/footer";
import { NavbarProps } from "../components/navbar";
import { HomeProps } from "../pages";
import { IFooter, IHomepage, INavbar, ITopbar, Media } from "./types";

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
    isCard: item.is_card,
    subMenu: item.sub_items.map((subItem) => ({
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
  } = attributes;

  return {
    article: {
      action: {
        link: article.action_link,
        text: article.action,
      },
      data: {
        image: article.article.image,
        title: "",
        content: article.article.content,
      },
    },
    slider,
    numbers: {
      data: numbers.list.map(({ description, value, logo }) => ({
        logo,
        number: value,
        description,
      })),
    },
    goals: {
      title: objectifs.title,
      data: objectifs.list.map(({ logo, content }) => ({
        content,
        image: logo,
      })),
    },
    programs: {
      data: programs.list.data.map(({ attributes }) => ({
        id: attributes.key,
        image: attributes.logo,
      })),
      title: programs.title,
    },

    tools: {
      data: tools.list.data.map(({ attributes }) => ({
        icon: attributes.logo,
        image: attributes.logo,
        text: attributes.title,
        link: attributes.key,
      })),
      title: tools.title,
    },

    activities: {
      title: activities.title,
      action: activities.call_to_action,
      data: activities.list.data.map(
        ({
          id,
          attributes: { cover, title, articles, activity_type, key },
        }) => ({
          cover,
          title,
          tag: activity_type.data.attributes.name,
          articles: articles.list.map(({ image, content }) => ({
            image,
            description: content,
          })),

          action: activities.call_to_action,
          id: key,
        })
      ),
    },
    media: {
      data: medias.list.data.map(
        ({ attributes: { key, title, type, video_link, photo } }) => ({
          title,
          type,
          src: type === "image" ? photo : video_link,
          id: key,
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

export enum EStrapi_Single_Types {
  TOP_BAR = "topbar",
  FOOTER = "footer",
  NAVBAR = "navbar",
  HOME_PAGE = "hompage",
}
export const formaters = {
  [EStrapi_Single_Types.TOP_BAR]: topBarFormater,
  [EStrapi_Single_Types.FOOTER]: footerFormater,
  [EStrapi_Single_Types.NAVBAR]: navbarFormater,
  [EStrapi_Single_Types.HOME_PAGE]: homepageFormater,
};

export const urlBuilder = (media: Media) => ({
  alt: media.data.attributes.alternativeText,
  blurhash: media.data.attributes.blurhash,
  contentType: media.data.attributes.mime,
  src: `https://${process.env.NEXT_PUBLIC_STRAPI_IMAGES_DOMAIN}${media.data.attributes.url}`,
});
