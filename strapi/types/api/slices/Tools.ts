import { ITool } from "../Tool";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type ISlicesTools<Populate extends string | never = never> = RequiredBy<
  {
    id: number;
    __component: "slices.tools";
    title: string;
    list: { data: ITool<ExtractNested<Populate, "list">>[] };
  },
  ExtractFlat<Populate>
>;
