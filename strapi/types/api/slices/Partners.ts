import { ISinglePartners } from "../single/Partners";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type ISlicesPartners<Populate extends string | never = never> =
  RequiredBy<
    {
      id: number;
      __component: "slices.partners";
      title: string;
      categories: ISinglePartners<ExtractNested<Populate, "categories">>[];
    },
    ExtractFlat<Populate>
  >;
