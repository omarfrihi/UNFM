import { IMedia } from "../../builtins/Media";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type ISingleArticle<Populate extends string | never = never> =
  RequiredBy<
    {
      id: number;
      __component: "single.article";
      content: string;
      image: { data: IMedia };
    },
    ExtractFlat<Populate>
  >;
