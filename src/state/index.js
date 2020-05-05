import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import commonReducer, { commonSaga } from './сommon';

const rootReducer = combineReducers({
  common: commonReducer,
});

export const rootSaga = function* () {
  yield all([
    commonSaga(),
  ])
};

export default rootReducer;
