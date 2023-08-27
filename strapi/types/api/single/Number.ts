import { IMedia } from "../../builtins/Media";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type ISingleNumber<Populate extends string | never = never> = RequiredBy<
  {
    id: number;
    __component: "single.number";
    logo: { data: IMedia };
    description: string;
    value: number;
  },
  ExtractFlat<Populate>
>;
