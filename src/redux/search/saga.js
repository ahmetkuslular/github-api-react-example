import { put, takeLatest, call } from 'redux-saga/effects';

import service from '../service';

import * as searchActions from './actions';
import { SEARCH_REPOSITORIES } from './actionTypes';

function* fetchRepositories({ params }) {
  try {
    const response = yield call(service.GET, '/search/repositories', params);
    yield put(searchActions.searchRepositoriesSuccess(response));
  } catch (e) {
    yield put(searchActions.searchRepositoriesError(e.message));
  }
}

export default function* root() {
  yield [yield takeLatest(SEARCH_REPOSITORIES, fetchRepositories)];
}
