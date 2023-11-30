import { useState } from "react";
import Search from "../components/Search";
import Options from "../components/Options";

const domainOptions = ["IT", "Sales", "UI Designing", "Finance", "Management", "Business Development"];
const genderOptions = ["Male", "Female", "Agender", "Bigender", "Genderqueer", "Non-binary", "Genderfluid"];
const availabilityOptions = ["true", "false"];

const Header = () => {
  // const [search, setSearch] = useState("");

  const [domain, setDomain] = useState("");
  const [gender, setGender] = useState("");
  const [availability, setAvailability] = useState("");

  return (
    <section className="header">
      <Search label="Search Names" />
      <Options
        id="domain"
        label="Domain"
        helper="Select Domain"
        setFunc={setDomain}
        value={domain}
        options={domainOptions}
      />
      <Options
        id="gender"
        label="Gender"
        helper="Select Gender"
        setFunc={setGender}
        value={gender}
        options={genderOptions}
      />
      <Options
        id="availability"
        label="Availability"
        helper="Select Availablity"
        value={availability}
        setFunc={setAvailability}
        options={availabilityOptions}
      />
    </section>
  );
};

export default Header;
