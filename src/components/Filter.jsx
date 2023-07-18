import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Filter = (props) => {
  const options = [
    "date descending",
    "date ascending",
    "votes descending",
    "votes ascending",
    "comment count descending",
    "comment count ascending",
  ];
  const [selected, setSelected] = useState(options[0]);
  const [searchParams, setSearchParams] = useSearchParams({});

  console.log(searchParams)
  const { onChange } = props;

  const handleSelectChange = (e) => {
    const selectedSort = e.target.value;
    setSelected(selectedSort);
    onChange(selectedSort);
    console.log(selectedSort)
    setSearchParams(selectedSort);
  };

  return (
    <form>
      <select
        className="filter-selector"
        value={selected}
        onChange={handleSelectChange}
      >
        {options.map((value) => {
          return (
            <option value={value} key={value}>
              {value}
            </option>
          );
        })}
      </select>
    </form>
  );
};
