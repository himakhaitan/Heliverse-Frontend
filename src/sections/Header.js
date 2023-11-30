import { useState } from "react";
import Search from "../components/Search";
import Options from "../components/Options";

import { useSelector} from "react-redux";
import { updateAvailable, updateDomain, updateGender } from "../slicers/search";

const domainOptions = [
  "IT",
  "Sales",
  "UI Designing",
  "Finance",
  "Management",
  "Business Development",
];
const genderOptions = [
  "Male",
  "Female",
  "Agender",
  "Bigender",
  "Genderqueer",
  "Non-binary",
  "Genderfluid",
];
const availabilityOptions = ["true", "false"];

const Header = () => {

  return (
    <section className="header">
      <Search label="Search Names" />
      <Options
        id="domain"
        label="Domain"
        helper="Select Domain"
        setFunc={updateDomain}
        value={useSelector((state) => state.users.domain)}
        options={domainOptions}
      />
      <Options
        id="gender"
        label="Gender"
        helper="Select Gender"
        setFunc={updateGender}
        value={useSelector((state) => state.users.gender)}
        options={genderOptions}
      />
      <Options
        id="availability"
        label="Availability"
        helper="Select Availablity"
        value={useSelector((state) => state.users.available)}
        setFunc={updateAvailable}
        options={availabilityOptions}
      />
    </section>
  );
};

export default Header;
