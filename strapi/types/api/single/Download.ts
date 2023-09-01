import { IMedia } from "../../builtins/Media";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type ISingleDownload<Populate extends string | never = never> =
  RequiredBy<
    {
      id: number;
      __component: "single.download";
      android_link: string;
      ios_link: string;
      logo: { data: IMedia };
      poster: { data: IMedia };
    },
    ExtractFlat<Populate>
  >;
