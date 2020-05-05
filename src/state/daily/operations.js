import {
  call, put, take, fork,
} from 'redux-saga/effects';

import { api } from '../../utils';

import types from './types';
import { summaryFetchDailySuccess } from './actions';

function* fetchDataDaily() {
  while (true) {
    try {
      yield take(types.SUMMARY_FETCH_DAILY_REQUEST);
      const res = yield call(api, 'api/daily', {
        method: 'GET',
      });
      yield put(summaryFetchDailySuccess({
        dataDaily: [...Object.values(res)],
      }))
    } catch (e) {
      alert(e);
    }
  }
}


export default function* () {
  yield fork(fetchDataDaily);
}
