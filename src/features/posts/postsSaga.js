import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { fetchPostsSuccess, fetchPostsFailure } from "./postsSlice";

const BASE_POSTS_URL = "https://jsonplaceholder.typicode.com/posts?_limit=1";

function* fetchPosts() {
  try {
    const response = yield call(axios.get, BASE_POSTS_URL);
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

export function* watchFetchPosts() {
  yield takeLatest("posts/fetchPostsSaga", fetchPosts);
}
