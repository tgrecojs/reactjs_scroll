import { actionTypes } from './reducer';
import { call, put, takeLatest } from 'redux-saga/effects';

const fetchData = api => fetch(api).then(res => res.json());

const url = 'http://www.snagfilms.com/apis/films.json?limit=10';

function* handleFetchRequest() {
  try {
    const data = yield call(fetchData, url);
    yield put({type: actionTypes.success, payload: data.films.film });

  } catch (e) {
    put({type: actionTypes.error, payload: e});
  }
};


function* watchHandleFetch() {
  yield takeLatest(actionTypes.initialize, handleFetchRequest);
};


export default watchHandleFetch;


