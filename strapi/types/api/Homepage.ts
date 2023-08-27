import { IMedia } from "../builtins/Media";
import { ISlicesArticle } from "./slices/Article";
import { ISlicesNumbers } from "./slices/Numbers";
import { ISlicesGoals } from "./slices/Goals";
import { ISlicesPrograms } from "./slices/Programs";
import { ISlicesTools } from "./slices/Tools";
import { ISlicesActivities } from "./slices/Activities";
import { ISlicesMedias } from "./slices/Medias";
import { ISlicesTestimonies } from "./slices/Testimonies";
import { ISlicesPartners } from "./slices/Partners";
import { ISlicesDownloads } from "./slices/Downloads";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export interface IHomepage<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      slider: { data: IMedia[] };
      title: string;
      article: ISlicesArticle<ExtractNested<Populate, "article">>;
      numbers: ISlicesNumbers<ExtractNested<Populate, "numbers">>;
      objectifs: ISlicesGoals<ExtractNested<Populate, "objectifs">>;
      programs: ISlicesPrograms<ExtractNested<Populate, "programs">>;
      tools: ISlicesTools<ExtractNested<Populate, "tools">>;
      activities: ISlicesActivities<ExtractNested<Populate, "activities">>;
      medias: ISlicesMedias<ExtractNested<Populate, "medias">>;
      testimonies: ISlicesTestimonies<ExtractNested<Populate, "testimonies">>;
      partners: ISlicesPartners<ExtractNested<Populate, "partners">>;
      downloads: ISlicesDownloads<ExtractNested<Populate, "downloads">>;
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
