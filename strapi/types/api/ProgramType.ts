import { IProgram } from "./Program";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export interface IProgramType<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      title: string;
      programs: { data: IProgram<ExtractNested<Populate, "programs">>[] };

      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
