import { all } from 'redux-saga/effects';
import searchSaga from './search/saga'

export default function* root() {
  yield all([
    searchSaga()
  ]);
}
