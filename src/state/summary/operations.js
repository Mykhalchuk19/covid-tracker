import {
  call, put, take, fork,
} from 'redux-saga/effects';

import { api } from '../../utils';

import types from './types';
import { summaryFetchSuccess } from './actions';

function* fetchSummary() {
  while (true) {
    try {
      yield take(types.SUMMARY_FETCH_REQUEST);
      const res = yield call(api, 'api/', {
        method: 'GET',
      });
      yield put(summaryFetchSuccess(
        {
          dataSummary: [
            {
              name: 'Confirmed',
              amount: res.confirmed.value,
            },
            {
              name: 'Recovered',
              amount: res.recovered.value,
            },
            {
              name: 'Deaths',
              amount: res.deaths.value,
            },
          ],
        },
      ));
    } catch (e) {
      alert(e);
    }
  }
}

export default function* () {
  yield fork(fetchSummary);
}
