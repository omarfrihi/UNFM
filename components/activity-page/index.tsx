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
const Activity = () => (
  <Wrapper>
    <Filter>
      <Search
        placeholder="Rechercher"
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
      <Select
        title="type d'activité"
        options={["activité 1", "activité 2", "activité 3", "activité 4"]}
      />
      <Select
        title="type de programme"
        options={["programme 1", "programme 2", "programme 3", "programme 4"]}
      />
      <Select
        title="Associations accréditées"
        options={[
          "Associations 1",
          "Associations 2",
          "Associations 3",
          "Associations 4",
        ]}
      />
      <Select
        title="Journées de le Femme"
        options={["Journées 1", "Journées 2", "Journées 3", "Journées 4"]}
      />
    </Filter>
    <ActivityWrapper>
      {activities.map((activity) => (
        <SingleActivity key={activity.title}>
          <ActivityComponent {...activity} />
        </SingleActivity>
      ))}
    </ActivityWrapper>
  </Wrapper>
);

export default Activity;
