import { IActivity } from "./Activity";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export interface IActivityType<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      name: string;
      activities: { data: IActivity<ExtractNested<Populate, "activities">>[] };
      key: string;
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
