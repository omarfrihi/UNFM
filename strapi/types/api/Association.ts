import { IActivity } from "./Activity";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export interface IAssociation<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      title: string;
      activities: { data: IActivity<ExtractNested<Populate, "activities">>[] };

      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
