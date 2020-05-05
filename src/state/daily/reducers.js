import { handleActions } from 'redux-actions';

import types from './types';

const defaultState = {
  dataDaily: [],
  loading: false
}

const summaryReducer = handleActions({
  [types.SUMMARY_FETCH_DAILY_REQUEST]: (state) => ({ ...state, loading: true }),
  [types.SUMMARY_FETCH_DAILY_SUCCESS]: (state, { payload: dataDaily }) => ({ ...state, ...dataDaily, loading: false }),
}, defaultState);

export default summaryReducer;
