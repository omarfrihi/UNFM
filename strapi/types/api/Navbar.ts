import { INavbarItem } from "./navbar/Item";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export interface INavbar<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      item: INavbarItem<ExtractNested<Populate, "item">>[];
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
