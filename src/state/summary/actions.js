import { createActions } from 'redux-actions';

import types from './types';

export const {
  summaryFetchRequest,
  summaryFetchSuccess,
} = createActions(
  types.SUMMARY_FETCH_REQUEST,
  types.SUMMARY_FETCH_SUCCESS,
)
