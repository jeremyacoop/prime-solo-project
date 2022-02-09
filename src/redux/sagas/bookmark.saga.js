import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

function* fetchBookmarks() {
    try{
        let response = yield axios.get('/bookmarks')
        console.log('Response:', response);
        yield put({
            type:   'SET_BOOKMARKS',
            payload:    response.data
        });
    }
    catch (err) {
        console.log('Fetch elements failed!', err);
        yield put({
            type:   'SET_ERROR',
            payload: 'Ack!'
        })
    }
}

function* bookmarkSaga() {
    console.log('Help');
    yield takeEvery('FETCH_BOOKMARKS', fetchBookmarks);
}

export default bookmarkSaga;