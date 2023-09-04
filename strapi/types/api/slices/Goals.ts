import { ISingleGoal } from "../single/Goal";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
import { IMedia } from "../../builtins/Media";
export type ISlicesGoals<Populate extends string | never = never> = RequiredBy<
  {
    id: number;
    __component: "slices.goals";
    list: ISingleGoal<ExtractNested<Populate, "list">>[];
    title: string;
    background_image: { data: IMedia };
  },
  ExtractFlat<Populate>
>;
