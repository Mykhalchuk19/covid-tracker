import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SummaryData from '../SummaryData/SummaryData';
import DailyData from '../DailyData/DailyData';
import Places from '../Places/Places';
import Country from '../Country/Country';


const Routing = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SummaryData} />
        <Route path="/daily" component={DailyData} />
        <Route path="/places" component={Places} />
        <Route path="/country" component={Country} />
      </Switch>
    </BrowserRouter>
  </>
)

export default Routing;
