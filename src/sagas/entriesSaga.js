import { call, put, take, fork } from "@redux-saga/core/effects";
import axios from "axios";
import entriesTypes, {
  populateAllEntries,
  populateEntryDetail,
} from "../actions/entries.actions";

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  const { data } = yield call(axios, "http://localhost:3001/entries");
  yield put(populateAllEntries(data));
}

export function* getEntryDetails(id) {
  const { data } = yield call(axios, `http://localhost:3001/values/${id}`);
  yield put(populateEntryDetail(id, data));
}

export function* getAllEntriesDetails() {
  const { payload } = yield take(entriesTypes.POPULATE_ENTRIES);
  for (let index = 0; index < payload.length; index++) {
    const entry = payload[index];
    yield fork(getEntryDetails, entry.id);
  }
}
