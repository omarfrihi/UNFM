import { ISingleArticle } from "../single/Article";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type ISlicesArticleList<Populate extends string | never = never> =
  RequiredBy<
    {
      id: number;
      __component: "slices.article-list";
      list: ISingleArticle<ExtractNested<Populate, "list">>[];
    },
    ExtractFlat<Populate>
  >;
