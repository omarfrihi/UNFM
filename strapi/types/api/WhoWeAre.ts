import { IMedia } from "../builtins/Media";
import { ISlicesArticleList } from "./slices/ArticleList";
import { ISlicesHistory } from "./slices/History";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export interface IWhoWeAre<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      title: string;
      cover: { data: IMedia[] };
      articles: ISlicesArticleList<ExtractNested<Populate, "articles">>;
      history: ISlicesHistory;
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
