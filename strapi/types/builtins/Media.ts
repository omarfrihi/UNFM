import { IMediaFormat } from "./MediaFormat";
import { ExtractNested } from "./ExtractNested";
import { ExtractFlat } from "./ExtractFlat";
import { RequiredBy } from "./RequiredBy";
export interface IMedia<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      formats: {
        thumbnail: IMediaFormat;
        large: IMediaFormat;
        medium: IMediaFormat;
        small: IMediaFormat;
      };
      name: string;
      hash: string;
      ext: string;
      mime: string;
      url: string;
      provider: string;
      previewUrl: string;
      provider_metadata: string;
      alternativeText: string;
      caption: string;
      width: number;
      height: number;
      size: number;
      blurhash: string;
    },
    ExtractFlat<Populate>
  >;
}
export type Media = { data: IMedia };
