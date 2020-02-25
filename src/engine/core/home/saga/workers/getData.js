// Core
import { apply, put } from 'redux-saga/effects';
// Engine
import Api from '../../../../services/api';
import { actions } from '../../actions';

export function* callGetDataWorker() {
  let response;

  yield put(actions.setIsMainPostDataLoading(true));

  try {
    response = yield apply(Api, Api.getMainPostHomeScreenData, []);
  } catch (err) {
    alert(err.message);
  }

  if (response && response.status >= 200 && response.status < 400) {
    // This is a mock
    const responseData = response.data.map(item => ({ ...item, textDescription: 'American Cancer Society' }));

    yield put(actions.setMainPostData(responseData));
  }

  yield put(actions.setIsMainPostDataLoading(false));
}
