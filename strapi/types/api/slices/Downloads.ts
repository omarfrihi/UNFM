import { ISingleDownload } from "../single/Download";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type ISlicesDownloads<Populate extends string | never = never> =
  RequiredBy<
    {
      id: number;
      __component: "slices.downloads";
      list: ISingleDownload<ExtractNested<Populate, "list">>[];
      download_text: string;
    },
    ExtractFlat<Populate>
  >;
