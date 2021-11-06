import React, { useState, useEffect } from "react";
import { styles } from "./styles";

const FilterCell = ({ ex, filterState, setFilterState, type }) => {
  const {
    cellContainer,
    cellLabel,
    unSelectedCellContainer,
    unselectedCellLabel,
  } = styles;
  const { label, value } = ex;
  const [selected, setSelected] = useState(false);

  const handleUpdateFilters = () => {
    let obj = filterState;
    switch (type) {
      case "Age":
        obj["MinimumAge"] = value.min;
        obj["MaximumAge"] = value.max;
        setFilterState({ ...obj });
        console.log({ filterState });
        return;
      case "Gender":
        obj["GenderCode"] = value;
        setFilterState({ ...obj });
        console.log({ filterState });
        return;
      default:
        obj[type] = value;
        setFilterState({ ...obj });
        console.log({ filterState });
        return;
    }
  };

  useEffect(() => {
    switch (type) {
      case "Gender":
        if (filterState["GenderCode"] === value) {
          setSelected(true);
        } else {
          setSelected(false);
        }
        return;
      case "Age":
        if (filterState["MinimumAge"] === value.min) {
          setSelected(true);
        } else {
          setSelected(false);
        }
        return;
      default:
        if (filterState[type] === value) {
          setSelected(true);
        } else {
          setSelected(false);
        }
        return;
    }
  }, [filterState]);

  return (
    <div
      onClick={handleUpdateFilters}
      style={selected ? cellContainer : unSelectedCellContainer}
    >
      <p style={selected ? cellLabel : unselectedCellLabel}>{label}</p>
    </div>
  );
};
export default FilterCell;
