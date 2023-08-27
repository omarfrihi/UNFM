import { IMedia } from "../builtins/Media";
import { IProgram } from "./Program";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export interface ITestimony<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      image: { data: IMedia };
      name: string;
      fonction: string;
      content: string;
      program: { data: IProgram<ExtractNested<Populate, "program">> };
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
