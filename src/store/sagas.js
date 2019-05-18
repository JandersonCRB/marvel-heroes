import { takeLatest, put, call, all } from 'redux-saga/effects';

import axios from 'axios';

function* asyncFetchMore(action) {
  const response = yield call(
    axios.get,
    'https://gateway.marvel.com:443/v1/public/characters', 
    {
      params: {
        apikey: 'c5389db0d89e848d8cef484407cee443',
        offset: action.payload.currentOffset
      }
    },
  );

  const characters = response.data.data.results;

  yield put({
    type: 'FETCH_MORE',
    payload: {
      characters,
    },
  });
}

export default function* root() {
  yield all([
    takeLatest('ASYNC_FETCH_MORE', asyncFetchMore),
  ]);
}