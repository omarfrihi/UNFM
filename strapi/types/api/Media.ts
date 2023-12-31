import { IProgram } from "./Program";
import { IMedia } from "../builtins/Media";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export interface IMedia1<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      title: string;
      programs?: { data: IProgram<ExtractNested<Populate, "programs">>[] };
      photo: { data: IMedia };

      video_link: string;
      type: "video" | "image";
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
