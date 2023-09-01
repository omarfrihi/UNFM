import { IMedia } from "../../builtins/Media";
import { ExtractNested } from "../../builtins/ExtractNested";
import { ExtractFlat } from "../../builtins/ExtractFlat";
import { RequiredBy } from "../../builtins/RequiredBy";
export type INavbarSubItems<Populate extends string | never = never> =
  RequiredBy<
    {
      id: number;
      __component: "navbar.sub-items";
      title: string;
      link: string;
      logo: { data: IMedia };
    },
    ExtractFlat<Populate>
  >;
