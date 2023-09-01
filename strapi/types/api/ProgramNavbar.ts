import { ISingleProgramSection } from "./single/ProgramSection";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export interface IProgramNavbar<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      sections: ISingleProgramSection[];
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
