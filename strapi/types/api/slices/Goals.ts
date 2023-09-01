import { ISingleGoal } from "../single/Goal";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type ISlicesGoals<Populate extends string | never = never> = RequiredBy<
  {
    id: number;
    __component: "slices.goals";
    list: ISingleGoal<ExtractNested<Populate, "list">>[];
    title: string;
  },
  ExtractFlat<Populate>
>;
