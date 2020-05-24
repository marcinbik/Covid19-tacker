import React, { useEffect, useState, useCallback } from "react";
import CovidInfections from "./CovidInfections";
import axios from "axios";

const API_ADDRESS = "https://pomber.github.io/covid19/timeseries.json"; //jesus christ this is json bourne
const DEFAULT_COUNTRY = "Poland";

const CovidInfectionsContainer = () => {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState(DEFAULT_COUNTRY);
  const [countries, setCountries] = useState([]);

  const handleChangeCountry = (newCountry) => {
    setCountry(newCountry);
  };

  const getInfections = useCallback(async () => {
    return axios
      .get(API_ADDRESS)
      .then(({ data }) => {
        setData(data[country]);
        setCountries(Object.keys(data));
      })
      .catch((error) => {
        console.error(error);
      });
  }, [country]);

  useEffect(() => {
    getInfections();
  }, [getInfections]);

  if (data.length === 0) {
    return <>Loading...</>;
  }

  return (
    <CovidInfections
      data={data}
      countries={countries}
      onChangeCountry={handleChangeCountry}
      defaultCountry={DEFAULT_COUNTRY}
    />
  );
};

export default CovidInfectionsContainer;
