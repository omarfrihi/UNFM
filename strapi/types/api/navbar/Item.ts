import { INavbarSubItems } from "./SubItems";
import { INavbarAction } from "./Action";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type INavbarItem<Populate extends string | never = never> = RequiredBy<
  {
    id: number;
    __component: "navbar.item";
    title: string;
    sub_items: INavbarSubItems<ExtractNested<Populate, "sub_items">>[];
    link: string;
    is_card: boolean;
    actions: INavbarAction[];
  },
  ExtractFlat<Populate>
>;
