import { createActions } from 'redux-actions';

import types from './types';

export const {
  summaryFetchRequest,
  summaryFetchSuccess,
  dailyFetchRequest,
  dailyFetchSuccess,
  placesFetchRequest,
  placesFetchSuccess,
} = createActions(
  types.SUMMARY_FETCH_REQUEST,
  types.SUMMARY_FETCH_SUCCESS,
  types.DAILY_FETCH_REQUEST,
  types.DAILY_FETCH_SUCCESS,
  types.PLACES_FETCH_REQUEST,
  types.PLACES_FETCH_SUCCESS,
)
