import { CategoriesList, Category, CategoryWrapper, Wrapper } from "./styles";
import { groupBy } from "lodash";
import Title from "../title";
import Image from "../Image";
import Link from "next/link";
import { Media } from "../../strapi/types";
export type CategoriesProps = {
  data: { id: number; image: Media; category: string }[];
};
const Categories = ({ data }: CategoriesProps) => {
  const groupedPrograms = groupBy(data, "category");
  return (
    <Wrapper>
      {Object.entries(groupedPrograms).map(([key, values]) => {
        return (
          <Category key={key}>
            <Title>{key}</Title>
            <CategoriesList>
              {values.map(({ image, id }) => (
                <Link href={`programs/${id}`} key={id}>
                  <CategoryWrapper>
                    <Image src={image} placeholder="blur" width={80} />
                  </CategoryWrapper>
                </Link>
              ))}
            </CategoriesList>
          </Category>
        );
      })}
    </Wrapper>
  );
};

export default Categories;
