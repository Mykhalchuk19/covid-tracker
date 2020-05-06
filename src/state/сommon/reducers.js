import { handleActions } from 'redux-actions';

import types from './types';

const defaultState = {
  dataSummary: [],
  dataDaily: [],
  places: [],
  countries: [],
  country: [],
  lastUpdate: '',
  loading: false,
}

const commonReducer = handleActions({
  [types.SUMMARY_FETCH_REQUEST]: (state) => ({ ...state, loading: true }),
  [types.SUMMARY_FETCH_SUCCESS]: (state, { payload: dataSummary }) => ({
    ...state,
    ...dataSummary,
    loading: false,
  }),
  [types.DAILY_FETCH_REQUEST]: (state) => ({ ...state, loading: true }),
  [types.DAILY_FETCH_SUCCESS]: (state, { payload: dataDaily }) => ({
    ...state,
    ...dataDaily,
    loading: false,
  }),
  [types.PLACES_FETCH_REQUEST]: (state) => ({ ...state, loading: true }),
  [types.PLACES_FETCH_SUCCESS]: (state, { payload: places }) => ({
    ...state,
    ...places,
    loading: false,
  }),
  [types.COUNTRIES_FETCH_REQUEST]: (state) => ({ ...state, loading: true }),
  [types.COUNTRIES_FETCH_SUCCESS]: (state, { payload: countries }) => ({
    ...state,
    ...countries,
    loading: false,
  }),
  [types.COUNTRY_FETCH_REQUEST]: (state) => ({ ...state, loading: true }),
  [types.COUNTRY_FETCH_SUCCESS]: (state, { payload: country }) => ({
    ...state,
    ...country,
    loading: false,
  }),
  [types.UPDATE_FETCH_REQUEST]: (state) => ({ ...state, loading: true }),
  [types.UPDATE_FETCH_SUCCESS]: (state, { payload: lastUpdate }) => ({
    ...state,
    ...lastUpdate,
    loading: false,
  }),
}, defaultState);

export default commonReducer;
