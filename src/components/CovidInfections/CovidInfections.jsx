import React from "react";
import CovidChart from "../Charts/CovidChart";
import Form from "../Form/Form";
import Styles from "../CovidInfections/CovidInfections.module.scss";
import Cards from "../Cards/Cards";
const CovidInfections = ({
  data,
  countries,
  onChangeCountry,
  defaultCountry,
}) => {

  return (
    <>
      <Cards data={data[data.length-1]} />
      <div className={Styles.wrapper}>
        <CovidChart className={Styles.covidChart} data={data} />
        <Form
          className={Styles.form}
          onChangeCountry={onChangeCountry}
          countries={countries}
          defaultCountry={defaultCountry}
        />
      </div>
    </>
  );
};

export default CovidInfections;
