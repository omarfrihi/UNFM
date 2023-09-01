import { IActivity } from "../Activity";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type ISlicesActivities<Populate extends string | never = never> =
  RequiredBy<
    {
      id: number;
      __component: "slices.activities";
      title: string;
      list: { data: IActivity<ExtractNested<Populate, "list">>[] };
      call_to_action: string;
    },
    ExtractFlat<Populate>
  >;
