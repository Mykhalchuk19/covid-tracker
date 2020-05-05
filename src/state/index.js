import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import summaryReducer, { summarySaga } from './summary';
import dailyReducer, { dailySaga } from './daily';

const rootReducer = combineReducers({
  summary: summaryReducer,
  daily: dailyReducer,
});

export const rootSaga = function* () {
  yield all([
    summarySaga(),
    dailySaga(),
  ])
};

export default rootReducer;
