import { IMedia } from "../Media";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type ISlicesMedias<Populate extends string | never = never> = RequiredBy<
  {
    id: number;
    __component: "slices.medias";
    title: string;
    list: { data: IMedia<ExtractNested<Populate, "list">>[] };
    call_to_action: string;
  },
  ExtractFlat<Populate>
>;
