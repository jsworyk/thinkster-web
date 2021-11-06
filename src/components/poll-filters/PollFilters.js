import React, { useState, useEffect } from "react";
import { filterConfig } from "./config";
import {
  getReligions,
  getEducation,
  getEthnicities,
} from "../../api/filters.api";
import FilterCell from "./FilterCell";

const PollFilters = ({ filterState, token, setFilterState }) => {
  const [filters, setFilters] = useState(filterConfig);
  useEffect(async () => {
    const arr = filters;
    if (arr.length < 5) {
      const religions = await getReligions(token);
      religions.forEach((r) => {
        r["label"] = r.Religion;
        r["value"] = r.ReligionId;
      });
      religions.unshift({ label: "All", value: null });
      const education = await getEducation(token);
      education.forEach((e) => {
        e["label"] = e.EducationLevel;
        e["value"] = e.EducationId;
      });
      education.unshift({ label: "All", value: null });
      const ethnicities = await getEthnicities(token);
      ethnicities.forEach((e) => {
        e["label"] = e.Ethnicity;
        e["value"] = e.EthnicityId;
      });
      ethnicities.unshift({ label: "All", value: null });
      arr.push({
        label: "Religion",
        values: religions,
      });
      arr.push({
        label: "Education",
        values: education,
      });
      arr.push({
        label: "Ethnicity",
        values: ethnicities,
      });
      setFilters([...arr]);
    }
  }, []);
  return (
    <div>
      <h3>Filter Results</h3>
      {filters.map((el) => (
        <>
          <h4 style={{ marginTop: 8, marginBottom: 8 }}>{el.label}</h4>
          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            {el.values.map((ex) => (
              <FilterCell
                filterState={filterState}
                setFilterState={setFilterState}
                ex={ex}
                type={el.label}
              />
            ))}
          </div>
        </>
      ))}
    </div>
  );
};
export default PollFilters;
