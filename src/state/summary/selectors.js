import { createSelector } from 'reselect';

import { path, identity } from 'ramda';

export const getSummarySelector = createSelector(
  path(['summary', 'dataSummary']),
  identity,
)
