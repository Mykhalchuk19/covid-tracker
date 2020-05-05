import { createSelector } from 'reselect';
import { path, identity } from 'ramda';


export const getDailyData = createSelector(
  path(['daily', 'dataDaily']),
  (dataDaily) => dataDaily.map((elem) => ({
    confirmed: elem.totalConfirmed,
    deaths: elem.deaths.total,
    reportDate: elem.reportDate,
  })),
);
