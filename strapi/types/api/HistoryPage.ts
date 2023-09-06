import { ISingleHistoryPopup } from "./single/HistoryPopup";
import { ISingleTimelineRecord } from "./single/TimelineRecord";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export interface IHistoryPage<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      popup: ISingleHistoryPopup<ExtractNested<Populate, "popup">>;
      timeline_records: ISingleTimelineRecord<
        ExtractNested<Populate, "timeline_record">
      >[];
      action_text: string;
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
