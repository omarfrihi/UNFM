import { MenuItem, OutlinedInput } from "@mui/material";
import { ActivityComponent } from "../activities";
import {
  ActivityWrapper,
  Arrow,
  Filter,
  Search,
  SearchLogo,
  SelectFilter,
  SingleActivity,
  Wrapper,
} from "./styles";

const Select = ({ title, options }: { title: string; options: string[] }) => (
  <SelectFilter
    value="value"
    sx={{
      "& .MuiOutlinedInput-notchedOutline": {
        border: "2px solid #144056 !important",
      },
      "&:hover > .MuiOutlinedInput-notchedOutline": {
        border: "2px solid #144056 !important",
      },
      "&:focus > .MuiOutlinedInput-notchedOutline": {
        border: "2px solid #144056 !important",
      },
      ".Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "2px solid #144056 !important",
      },
      ".MuiSelect-iconOutlined": {
        color: "#144056",
      },
    }}
  >
    <MenuItem value={"value"} disabled>
      {title}
    </MenuItem>
    {options.map((option) => (
      <MenuItem value={option} key={option}>
        {option}
      </MenuItem>
    ))}
  </SelectFilter>
);
const activities = [
  {
    image: require("../../public/assets/activity1.png"),
    tag: "Activités de l’UNFM",
    title: "Célébration de la Journée Internationale de la Femme 8 Mars 2021",
    description:
      "lancement de plusieurs programmes de développement au profit des femmes et des filles",
  },
  {
    image: require("../../public/assets/activity2.png"),
    tag: "Activités de l’UNFM",
    title:
      "L’Union Nationale des Femmes du Maroc récompense à Aghbala la lauréate de la première édition  du Prix Lalla Meryem de l’Innovation et de l’Excellence",
    description:
      "Aghbala (Province de Béni Mellal) – En application des Orientations Éclairées de Son Altesse Royale...",
  },
  {
    image: require("../../public/assets/activity2.png"),
    tag: "Activités de l’UNFM",
    title:
      "L’Union Nationale des Femmes du Maroc récompense à Aghbala la lauréate de la première édition  du Prix Lalla Meryem de l’Innovation et de l’Excellence",
    description:
      "Aghbala (Province de Béni Mellal) – En application des Orientations Éclairées de Son Altesse Royale...",
  },
  {
    image: require("../../public/assets/activity2.png"),
    tag: "Activités de l’UNFM",
    title:
      "L’Union Nationale des Femmes du Maroc récompense à Aghbala la lauréate de la première édition  du Prix Lalla Meryem de l’Innovation et de l’Excellence",
    description:
      "Aghbala (Province de Béni Mellal) – En application des Orientations Éclairées de Son Altesse Royale...",
  },
  {
    image: require("../../public/assets/activity1.png"),
    tag: "Activités de l’UNFM",
    title: "Célébration de la Journée Internationale de la Femme 8 Mars 2021",
    description:
      "lancement de plusieurs programmes de développement au profit des femmes et des filles",
  },
  {
    image: require("../../public/assets/activity1.png"),
    tag: "Activités de l’UNFM",
    title: "Célébration de la Journée Internationale de la Femme 8 Mars 2021",
    description:
      "lancement de plusieurs programmes de développement au profit des femmes et des filles",
  },
  {
    image: require("../../public/assets/activity1.png"),
    tag: "Activités de l’UNFM",
    title: "Célébration de la Journée Internationale de la Femme 8 Mars 2021",
    description:
      "lancement de plusieurs programmes de développement au profit des femmes et des filles",
  },
];

const Activity = ({
  data,
  action,
  filters: { selects, search },
}: {
  action: string;
  filters: { selects: { name: string; options: string[] }[]; search: string };
  data: {
    title: string;
    image: string;
    tag: string;
    description: string;
    link: string;
  }[];
}) => (
  <Wrapper>
    <Filter>
      <Search
        placeholder={search}
        startAdornment={<SearchLogo fontSize="small" />}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&:hover > .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      />
      {selects.map(({ name, options }) => (
        <Select key={name} title={name} options={options} />
      ))}
    </Filter>
    <ActivityWrapper>
      {data.map((activity) => (
        <SingleActivity key={activity.title}>
          <ActivityComponent {...activity} action={action} />
        </SingleActivity>
      ))}
    </ActivityWrapper>
  </Wrapper>
);

export default Activity;
