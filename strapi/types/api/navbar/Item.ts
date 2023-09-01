import { INavbarSubItems } from "./SubItems";
import { INavbarAction } from "./Action";
import { IProgram } from "../Program";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type INavbarItem<Populate extends string | never = never> = RequiredBy<
  {
    id: number;
    __component: "navbar.item";
    title: string;
    sub_items: INavbarSubItems[];
    link: string;
    isRelation: boolean;
    actions: INavbarAction[];
    programs: { data: IProgram<ExtractNested<Populate, "programs">>[] };
  },
  ExtractFlat<Populate>
>;
