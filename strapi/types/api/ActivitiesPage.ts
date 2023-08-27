import { IMedia } from "../builtins/Media";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export interface IActivitiesPage<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      cover: { data: IMedia };
      title: string;
      search_placeholder: string;
      program_type_placeholder: string;
      activity_type_placholder: string;
      association_placeholder: string;
      womenday_placeholder: string;
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
