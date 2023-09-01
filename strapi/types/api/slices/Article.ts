import { ISingleArticle } from "../single/Article";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type ISlicesArticle<Populate extends string | never = never> =
  RequiredBy<
    {
      id: number;
      __component: "slices.article";
      article: ISingleArticle<ExtractNested<Populate, "article">>;
      action: string;
      action_link: string;
    },
    ExtractFlat<Populate>
  >;
