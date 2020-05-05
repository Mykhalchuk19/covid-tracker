import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import summaryReducer, { summarySaga } from './summary';

const rootReducer = combineReducers({
  summary: summaryReducer,
});

export const rootSaga = function* () {
  yield all([
    summarySaga(),
  ])
};

export default rootReducer;
