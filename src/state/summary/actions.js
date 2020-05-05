import { createActions } from 'redux-actions';

import types from './types';

export const {
  summaryFetchRequest,
  summaryFetchSuccess,
  summaryFetchDailyRequest,
  summaryFetchDailySuccess,
} = createActions(
  types.SUMMARY_FETCH_REQUEST,
  types.SUMMARY_FETCH_SUCCESS,
  types.SUMMARY_FETCH_DAILY_REQUEST,
  types.SUMMARY_FETCH_DAILY_SUCCESS,
)
