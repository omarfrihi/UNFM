import { IMedia } from "../../builtins/Media";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type ISingleGoal<Populate extends string | never = never> = RequiredBy<
  {
    id: number;
    __component: "single.goal";
    logo: { data: IMedia };
    content: string;
  },
  ExtractFlat<Populate>
>;
