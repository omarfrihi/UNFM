import { MenuItem, OutlinedInput } from "@mui/material";
import { ActivityComponent, ActivityType } from "../activities";
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

const Activity = ({
  data,
  action,
  filters: { selects, search },
}: {
  action: string;
  filters: { selects: { name: string; options: string[] }[]; search: string };
  data: ActivityType[];
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
