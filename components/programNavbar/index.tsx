import Link from "next/link";
import { Items, Separator, Title, UnderLine, Wrapper } from "./styles";
import { useRouter } from "next/router";

const Navbar = ({
  id,
  sections,
}: {
  id: string;
  sections: { link: string; title: string }[];
}) => {
  const { asPath } = useRouter();
  return (
    <Wrapper>
      <Items>
        {sections.map(({ link, title }, index) => {
          const [path, section] = asPath.split("#");
          const isActive =
            `/programs/${id}#${link}` ===
            (section ? asPath : `${path}#${sections[0]?.link}`);

          return (
            <>
              <Link href={`#${link}`}>
                <Title active={isActive}>{title}</Title>
                <UnderLine active={isActive} />
              </Link>
              {index < sections.length - 1 && <Separator />}
            </>
          );
        })}
      </Items>
    </Wrapper>
  );
};

export default Navbar;
