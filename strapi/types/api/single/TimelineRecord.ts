import { IMedia } from "../../builtins/Media";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type ISingleTimelineRecord<Populate extends string | never = never> =
  RequiredBy<
    {
      id: number;
      __component: "single.timeline-record";
      image: { data: IMedia };
      date: string;
      title: string;
      content: string;
      quote: string;
      link: string;
      thumbnail: { data: IMedia };
    },
    ExtractFlat<Populate>
  >;
