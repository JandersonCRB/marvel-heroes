import { takeLatest, put, call, all } from 'redux-saga/effects';

import axios from 'axios';

// This is here for demonstration purposes only
const API_KEY = 'c5389db0d89e848d8cef484407cee443';

function* asyncFetchMore(action) {
  const response = yield call(
    axios.get,
    'https://gateway.marvel.com:443/v1/public/characters',
    {
      params: {
        apikey: API_KEY,
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

function* asyncSelectCharacter(action) {
  if (action.payload.id) {
    const response = yield call(
      axios.get,
      `https://gateway.marvel.com:443/v1/public/characters/${action.payload.id}`,
      {
        params: {
          apikey: API_KEY,
          offset: action.payload.currentOffset
        }
      },
    );
  
    const { results } = response.data.data;
    const { id, name, description, thumbnail, comics, series, stories, events } = results[0];
    yield put({
      type: 'SELECT_CHARACTER',
      payload: {
        selectedCharacter: {
          id,
          name,
          description,
          thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
          comics: comics.items,
          series: series.items,
          stories: stories.items,
          events: events.items,
        },
      },
    });
  } else {
    // Set the selected character to null as it closes the detail modal
    yield put({
      type: 'SELECT_CHARACTER',
      payload: {
        selectedCharacter: null,
      },
    });
  }
}

export default function* root() {
  yield all([
    takeLatest('ASYNC_FETCH_MORE', asyncFetchMore),
    takeLatest('ASYNC_SELECT_CHARACTER', asyncSelectCharacter),
  ]);
}
