import { IProgram } from "./Program";
import { IMedia } from "../builtins/Media";
import { ISlicesArticleList } from "./slices/ArticleList";
import { IAssociation } from "./Association";
import { IActivityType } from "./ActivityType";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export interface IActivity<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      title: string;
      programs: { data: IProgram<ExtractNested<Populate, "programs">>[] };
      cover: { data: IMedia };
      articles: ISlicesArticleList<ExtractNested<Populate, "articles">>[];
      associations: {
        data: IAssociation<ExtractNested<Populate, "associations">>[];
      };
      activity_type: {
        data: IActivityType<ExtractNested<Populate, "activity_type">>;
      };
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
