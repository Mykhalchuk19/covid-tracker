import { handleActions } from 'redux-actions';

import types from './types';

const defaultState = {
  dataSummary: [],
  loading: false,
}

const summaryReducer = handleActions({
  [types.SUMMARY_FETCH_REQUEST]: (state) => ({ ...state, loading: true }),
  [types.SUMMARY_FETCH_SUCCESS]: (state, { payload: dataSummary }) => ({
    ...state,
    ...dataSummary,
    loading: false,
  }),
}, defaultState);

export default summaryReducer;
