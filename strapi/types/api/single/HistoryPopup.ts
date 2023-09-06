import { IMedia } from "../../builtins/Media";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type ISingleHistoryPopup<Populate extends string | never = never> =
  RequiredBy<
    {
      id: number;
      __component: "single.history-popup";
      image: { data: IMedia };
      content: string;
      author: string;
    },
    ExtractFlat<Populate>
  >;
