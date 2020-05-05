import { createSelector } from 'reselect';

import { path, identity } from 'ramda';

export const getSummarySelector = createSelector(
  path(['common', 'dataSummary']),
  identity,
);

export const getDailyData = createSelector(
  path(['common', 'dataDaily']),
  identity,
);

export const getPlacesSelector = createSelector(
  path(['common', 'places']),
  identity,
)

export const getLoadingSelector = createSelector(
  path(['common', 'loading']),
  identity,
)
