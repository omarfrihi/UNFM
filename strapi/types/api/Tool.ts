import { IMedia } from "../builtins/Media";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export interface ITool<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      title: string;
      logo: { data: IMedia };
      image: { data: IMedia[] };
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
