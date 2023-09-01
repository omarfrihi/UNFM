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

const Select = ({
  title,
  options,
}: {
  title: string;
  options: { code: string; value: string }[];
}) => (
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
      <MenuItem value={option.value} key={option.code}>
        {option.value}
      </MenuItem>
    ))}
  </SelectFilter>
);
export type ActivityProps = {
  filters: {
    selects: { name: string; options: { code: string; value: string }[] }[];
    search: string;
  };
  data: ActivityType[];
};
const Activity = ({ data, filters: { selects, search } }: ActivityProps) => (
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
          <ActivityComponent {...activity} />
        </SingleActivity>
      ))}
    </ActivityWrapper>
  </Wrapper>
);

export default Activity;
