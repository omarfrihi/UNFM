import { IProgram } from "../Program";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type ISlicesPrograms<Populate extends string | never = never> =
  RequiredBy<
    {
      id: number;
      __component: "slices.programs";
      title: string;
      list: { data: IProgram<ExtractNested<Populate, "list">>[] };
    },
    ExtractFlat<Populate>
  >;
