import {
  call, put, take, fork,
} from 'redux-saga/effects';

import { api } from '../../utils';

import types from './types';
import {
  summaryFetchSuccess,
  dailyFetchSuccess,
  placesFetchSuccess,
  countriesFetchSuccess,
  countryFetchSuccess,
  updateFetchSuccess,
} from './actions';

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

function* fetchDataDaily() {
  while (true) {
    try {
      yield take(types.DAILY_FETCH_REQUEST);
      const res = yield call(api, 'api/daily', {
        method: 'GET',
      })
      yield put(dailyFetchSuccess({
        dataDaily: [...res.map((elem) => ({
          confirmed: elem.confirmed.total,
          deaths: elem.deaths.total,
          reportDate: elem.reportDate,
        }))],
      }))
    } catch (e) {
      alert(e);
    }
  }
}

function* fetchPlaces() {
  while (true) {
    try {
      yield take(types.PLACES_FETCH_REQUEST);
      const res = yield call(api, 'api/confirmed', {
        method: 'GET',
      })
      yield put(placesFetchSuccess({
        places: [...res.map((elem) => ({
          id: elem.uid,
          placeName: elem.combinedKey,
          confirmed: elem.confirmed,
          recovered: elem.recovered,
          active: elem.active,
          deaths: elem.deaths,
        })).slice(0, 5)],
      }))
    } catch (e) {
      alert(e);
    }
  }
}

function* fetchCountries() {
  while (true) {
    try {
      yield take(types.COUNTRIES_FETCH_REQUEST);
      const res = yield call(api, 'api/countries', {
        method: 'GET',
      })
      yield put(countriesFetchSuccess({
        countries: [...res.countries.map((country) => ({
          label: country.name,
          value: country.name,
        }))],
      }))
    } catch (e) {
      alert(e);
    }
  }
}

function* fetchCountry() {
  while (true) {
    try {
      const action = yield take(types.COUNTRY_FETCH_REQUEST);
      console.log(action.payload.value);
      const res = yield call(api, `api/countries/${action.payload.value}`, {
        method: 'GET',
      });
      yield put(countryFetchSuccess(
        {
          country: [
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

function* fetchLastUpdate() {
  while (true) {
    try {
      yield take(types.UPDATE_FETCH_REQUEST);
      const res = yield call(api, 'api/', {
        method: 'GET',
      });
      yield put(updateFetchSuccess(
        {
          lastUpdate: res.lastUpdate,
        },
      ));
    } catch (e) {
      alert(e);
    }
  }
}

export default function* () {
  yield fork(fetchSummary);
  yield fork(fetchDataDaily);
  yield fork(fetchPlaces);
  yield fork(fetchCountries);
  yield fork(fetchCountry);
  yield fork(fetchLastUpdate);
}
