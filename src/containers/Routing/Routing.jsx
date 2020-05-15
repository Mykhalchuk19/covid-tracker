import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

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
        <Route path="*" component={() => <div>not found</div>} />
      </Switch>
    </BrowserRouter>
  </>
)

export default Routing;
