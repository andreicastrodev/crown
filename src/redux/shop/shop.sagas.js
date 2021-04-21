import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
  fetchCollectionsStart,
} from "./shop.actions";
import shopActionType from "./shop.types";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (err) {
    yield put(fetchCollectionsFailure(err.message));
  }
}

export function* fetchCollectionsSaga() {
  yield takeLatest(
    shopActionType.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
