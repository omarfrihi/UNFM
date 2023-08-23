import { CategoriesList, Category, CategoryWrapper, Wrapper } from "./styles";
import { groupBy } from "lodash";
import Title from "../title";
import Image from "next/image";
import Link from "next/link";
const Categories = ({
  data: { categories, programs },
}: {
  data: {
    categories: { [key in string]: string };
    programs: { id: string; image: string; category: string }[];
  };
}) => {
  const groupedPrograms = groupBy(programs, "category");
  return (
    <Wrapper>
      {Object.entries(groupedPrograms).map(([key, values]) => {
        return (
          <Category key={key}>
            <Title>{categories[key]}</Title>
            <CategoriesList>
              {values.map(({ image, id }) => (
                <Link href={`programs/${id}`} key={id}>
                  <CategoryWrapper>
                    <Image
                      src={image}
                      alt="program"
                      placeholder="blur"
                      width={80}
                    />
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
