import { IFooterPhoneNumbers } from "./footer/PhoneNumbers";
import { ExtractNested } from "../builtins/ExtractNested";
import { ExtractFlat } from "../builtins/ExtractFlat";
import { RequiredBy } from "../builtins/RequiredBy";
export interface IFooter<Populate extends string | never = never> {
  id: number;
  attributes: RequiredBy<
    {
      contact_us: string;
      copyright: string;
      phone_numbers: IFooterPhoneNumbers[];
      email: string;
      publishedAt: string;
      createdAt: string;
      updatedAt: string;
    },
    ExtractFlat<Populate>
  >;
}
