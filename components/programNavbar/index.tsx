import Link from "next/link";
import { Items, Separator, Title, UnderLine, Wrapper } from "./styles";
import { useRouter } from "next/router";

export type Sections = { link: string; title: string }[];
export type ProgramsNavbarProps = {
  id: number;
  sections: Sections;
};

const Navbar = ({ id, sections }: ProgramsNavbarProps) => {
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
              <Link href={`#${link}`} key={title}>
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
