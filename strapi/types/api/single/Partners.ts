import { IPartner } from "../Partner";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type ISinglePartners<Populate extends string | never = never> =
  RequiredBy<
    {
      id: number;
      __component: "single.partners";
      title: string;
      list: { data: IPartner<ExtractNested<Populate, "list">>[] };
    },
    ExtractFlat<Populate>
  >;
