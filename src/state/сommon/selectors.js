import { createSelector } from 'reselect';

import { path, identity } from 'ramda';

export const getLoadingSelector = createSelector(
  path(['common', 'loading']),
  identity,
)

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

export const getCountriesSelector = createSelector(
  path(['common', 'countries']),
  identity,
)

export const getCountrySelector = createSelector(
  path(['common', 'country']),
  identity,
)

export const getLastUpdateSelector = createSelector(
  path(['common', 'lastUpdate']),
  identity,
)
