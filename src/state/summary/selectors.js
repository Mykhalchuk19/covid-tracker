import { createSelector } from 'reselect';

import { path, identity } from 'ramda';

export const getSummarySelector = createSelector(
  path(['summary', 'dataSummary']),
  identity,
)


export const getDailyData = createSelector(
  path(['summary', 'dataDaily']),
  (dataDaily) => dataDaily.map((elem) => ({
    confirmed: elem.totalConfirmed,
    deaths: elem.deaths.total,
    reportDate: elem.reportDate,
  })),
);
