import { createActions } from 'redux-actions';

import types from './types';

export const {
  summaryFetchRequest,
  summaryFetchSuccess,
  dailyFetchRequest,
  dailyFetchSuccess,
  placesFetchRequest,
  placesFetchSuccess,
  countriesFetchRequest,
  countriesFetchSuccess,
  countryFetchRequest,
  countryFetchSuccess,
  updateFetchRequest,
  updateFetchSuccess,
} = createActions(
  types.SUMMARY_FETCH_REQUEST,
  types.SUMMARY_FETCH_SUCCESS,
  types.DAILY_FETCH_REQUEST,
  types.DAILY_FETCH_SUCCESS,
  types.PLACES_FETCH_REQUEST,
  types.PLACES_FETCH_SUCCESS,
  types.COUNTRIES_FETCH_REQUEST,
  types.COUNTRIES_FETCH_SUCCESS,
  types.COUNTRY_FETCH_REQUEST,
  types.COUNTRY_FETCH_SUCCESS,
  types.UPDATE_FETCH_REQUEST,
  types.UPDATE_FETCH_SUCCESS,
)
