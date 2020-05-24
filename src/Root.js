import React from "react";
import Styles from "./Root.module.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Title from "./components/Title/Title"
import CovidInfectionsContainer from "./components/CovidInfections/CovidInfections.container";

const Root = () => (
  <div className={Styles.wrapper}>
    <Router>
    <Title >Statyski zachorowań na Covid19</Title>

      <div className={Styles.Chart}>
        <Switch>
          <Route path="/" component={CovidInfectionsContainer} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default Root;
