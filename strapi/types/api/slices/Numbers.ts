import { ISingleNumber } from "../single/Number";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type ISlicesNumbers<Populate extends string | never = never> =
  RequiredBy<
    {
      id: number;
      __component: "slices.numbers";
      list: ISingleNumber<ExtractNested<Populate, "list">>[];
    },
    ExtractFlat<Populate>
  >;
