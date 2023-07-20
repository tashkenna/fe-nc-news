import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Filter = (props) => {
  const options = [
    "none",
    "created_at",
    "votes",
    "comment_count"
  ];

  const [selected, setSelected] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();


  const handleSortByChange = (event) => {
    const selectedOption = event.target.value;
    setSelected(selectedOption);

    if (selectedOption !== "none") {
      setSearchParams({ sort_by: selectedOption });
    } else {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete("sort_by");
      setSearchParams(newParams);
    }
  };

  return (
    <form>
      <select
        className="filter-selector"
       value={selected}
        onChange={handleSortByChange}
      >
        {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </select>
    </form>
  );
};