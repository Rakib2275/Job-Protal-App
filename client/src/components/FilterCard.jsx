import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import "./filterCard.css";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: ["Dhaka", "Cumilla", "Borishal", "Kholna", "Rajshahi"],
  },
  {
    filterType: "Industry",
    array: ["Fronted Developer", "Backend Developer", "FullStack Developer","Problem Solving"],
  },
  {
    filterType: "Salary",
    array: ["0-20k", "20-40k", "40k-1lakh"],
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectValue] = useState("");
  const dispatch = useDispatch();
  const handleChange = (value) => {
    setSelectValue(value);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue))
  }, [selectedValue]);
  return (
    <div className="my-card">
      <h2 className="font-medium text-lg">Filter Job</h2>
      <hr className="mt-3" />
      <RadioGroup
        value={selectedValue}
        onValueChange={handleChange}
        className="mt-2"
      >
        {filterData.map((data, index) => (
          <div key={index} className="data">
            <h3 className="type">{data.filterType}</h3>
            {data.array.map((item, idx) => {
              const itemId = `r${index}-${idx}`;
              return (
                <div key={itemId} className="flex items-center filter">
                  <RadioGroupItem value={item} id={itemId} />
                  <Label htmlFor={itemId}>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
