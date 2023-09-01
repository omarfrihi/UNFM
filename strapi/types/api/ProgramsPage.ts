import { IMedia } from "../builtins/Media";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export interface IProgramsPage<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      title: string;
      cover: { data: IMedia };
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
