import { ITestimony } from "../Testimony";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type ISlicesTestimonies<Populate extends string | never = never> =
  RequiredBy<
    {
      id: number;
      __component: "slices.testimonies";
      title: string;
      list: { data: ITestimony<ExtractNested<Populate, "list">>[] };
    },
    ExtractFlat<Populate>
  >;
