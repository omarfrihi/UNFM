import { INavbarLanguages } from "./navbar/Languages";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export interface ITopbar<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      call_us: string;
      phone_number: string;
      dowload: string;
      app_name: string;
      app_link: string;
      languages: INavbarLanguages[];
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
