import React, { useState } from "react";
//import Styles from "./Form.module.scss";
import Select from "react-select";

const Form = ({ onChangeCountry, countries, defaultCountry }) => {
  const [country, setCountry] = useState({
    value: defaultCountry, label: defaultCountry
  });

  const handleCountryChange = selected => {
    setCountry(selected);
    onChangeCountry(selected.value);
  };

  const mapCountries = items => items.map(item => (
    { value: item, label: item }
  ))
  return <Select options={mapCountries(countries)} onChange={handleCountryChange} value={country} initialValue={{}} />;
};

export default Form;
