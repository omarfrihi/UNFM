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
  const {article}=attributes
  
  return({

  article: {
    action: {
        link: article.action_link,
        text: article.action,
    },
    data: {
        image: "",
        title: "",
        content: string[];
    };
};
  slider: {
    data: string[];
};
  numbers: {
    logo?: string | undefined;
    data: {
        number: "",
        description: "",
    }[];
};
  goals: {
    title: "",
    data: {
        content: "",
        image: "",
    }[];
};
  programs: {
    data: {
        id: "",
        image: "",
    }[];
    title: "",
};
  tools: {
    title: "",
    data: {
        icon: "",
        image: "",
        text: "",
        link: "",
    }[];
};
  activities: {
    title: "",
    action: "",
    data: ActivityType[];
};
  media: {
    data: {
        title: "",
        type: EMediaType;
        src: "",
        id: "",
    }[];
    title: "",
    action: {
        text: "",
        link: "",
    };
};
  experiences: {
    title: "",
    data: {
        personImage: "",
        name: "",
        fonction: "",
        text: "",
    }[];
};
  partners: {
    title: "",
    data: {
        title: "",
        partners: string[];
    }[];
};
  download: {
    downloadText: "",
    data: {
        androidLink: "",
        iOsLink: "",
        icon: "",
        poster: "",
    }[];
};
})};

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
