import { IMedia } from "../builtins/Media";
import { ISlicesArticleList } from "./slices/ArticleList";
import { ISlicesActivities } from "./slices/Activities";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export interface IWomenDay<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      cover: { data: IMedia };
      title: string;
      articles: ISlicesArticleList<ExtractNested<Populate, "articles">>;
      activities: ISlicesActivities<ExtractNested<Populate, "activities">>;
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
