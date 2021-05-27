import {
  call,
  cancel,
  cancelled,
  delay,
  fork,
  put,
  take,
  takeEvery,
} from "redux-saga/effects";

async function double(number) {
  return number * 2;
}

export function* testSaga() {
  while (true) {
    console.log("Starting saga");
    const state = yield take("TEST_MESSAGE");
    const a = yield call(double, 2);
    console.log(a);
    const b = yield double(2);
    console.log(b);
    console.log("Finish saga function", state);
  }
}

function* doNothing(val) {
  console.log("called ", val);
  yield delay(1000);
  console.log("doing nothing ", val);
}

export function* testSagaFork() {
  while (true) {
    yield take("TEST_MESSAGE_2");
    yield fork(doNothing);
    yield fork(doNothing);
    yield fork(doNothing);
    yield fork(doNothing);
    // yield call(doNothing, 1);
    // yield call(doNothing, 2);
    // yield call(doNothing, 3);
    // yield call(doNothing, 4);
  }
}

export function* testSagaTakeEveryProcess({ index }) {
  console.log(`Process for index ${index}`);
  yield delay(3000);
  console.log(`Ending for index ${index}`);
}

export function* testSagaTakeEvery() {
  const { payload } = yield takeEvery(
    "TEST_MESSAGE_3",
    testSagaTakeEveryProcess
  );
  console.log("Finished Takeevery for index", payload);
}

function* infinitySaga() {
  console.log("starting infinity saga");
  while (true) {
    try {
      console.log("inside infinity loop");
      yield delay(500);
    } catch (error) {
      console.error("A error happened");
    } finally {
      console.log("fork was cancelled", yield cancelled());
    }
    console.log("ending infinity saga");
  }
}

export function* testSagaCancelled() {
  yield take("TEST_MESSAGE_4");
  const handleCancel = yield fork(infinitySaga);
  yield delay(3000);
  yield cancel(handleCancel);
}

export function* dispatchTest() {
  let index = 0;
  yield put({ type: "TEST_MESSAGE_4", payload: index });
  // while (true) {
  //   yield delay(500);
  //   index++;
  // }
}
