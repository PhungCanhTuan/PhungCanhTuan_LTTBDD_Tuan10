// store/sagas.js
import { takeEvery } from 'redux-saga/effects';
import { addTodo, removeTodo } from './toDoSlice';

// Worker Saga để lắng nghe hành động
function* watchAddTodo() {
  yield takeEvery(addTodo.type, function* () {
    // Có thể xử lý logic tại đây nếu cần
  });
}

function* watchRemoveTodo() {
  yield takeEvery(removeTodo.type, function* () {
    // Có thể xử lý logic tại đây nếu cần
  });
}

// Root saga
function* rootSaga() {
  yield watchAddTodo();
  yield watchRemoveTodo();
}

export default rootSaga;
