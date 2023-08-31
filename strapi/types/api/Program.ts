import { ITestimony } from "./Testimony";
import { IPartner } from "./Partner";
import { IMedia } from "../builtins/Media";
import { IActivity } from "./Activity";
import { IMedia1 } from "./Media";
import { ISlicesArticleList } from "./slices/ArticleList";
import { IProgramType } from "./ProgramType";
import { ISingleProgramSection } from "./single/ProgramSection";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
import { ISlicesNumbers } from "./slices/Numbers";
import { ISlicesGoals } from "./slices/Goals";
export interface IProgram<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      title: string;
      testimonies: {
        data: ITestimony<ExtractNested<Populate, "testimonies">>[];
      };
      partners: { data: IPartner<ExtractNested<Populate, "partners">>[] };
      logo: { data: IMedia };
      cover: { data: IMedia };
      activities: { data: IActivity<ExtractNested<Populate, "activities">>[] };
      medias: { data: IMedia1<ExtractNested<Populate, "medias">>[] };
      articles: ISlicesArticleList<ExtractNested<Populate, "articles">>;
      program_type: {
        data: IProgramType<ExtractNested<Populate, "program_type">>;
      };
      sections: ISingleProgramSection[];
      numbers: ISlicesNumbers<ExtractNested<Populate, "numbers">>;
      objectifs: ISlicesGoals<ExtractNested<Populate, "objectifs">>;

      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
