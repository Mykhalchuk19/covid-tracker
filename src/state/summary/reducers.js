import { handleActions } from 'redux-actions';

import types from './types';

const defaultState = {
  dataSummary: [],
  dataDaily: [],
  loading: false,
}

const summaryReducer = handleActions({
  [types.SUMMARY_FETCH_REQUEST]: (state) => ({ ...state, loading: true }),
  [types.SUMMARY_FETCH_SUCCESS]: (state, { payload: dataSummary }) => ({
    ...state,
    ...dataSummary,
    loading: false,
  }),
  [types.SUMMARY_FETCH_DAILY_REQUEST]: (state) => ({ ...state, loading: true }),
  [types.SUMMARY_FETCH_DAILY_SUCCESS]: (state, { payload: dataDaily }) => ({ ...state, ...dataDaily, loading: false }),
}, defaultState);

export default summaryReducer;
