import { call, all, takeLatest, put } from 'redux-saga/effects';

import { FETCH_ROUTE_LIST_ITEMS, fetchRouteListItemsAction } from 'src/features/routes/actions';
import { fetchRouteListItems } from 'src/api/routes';
import { Routes } from 'src/store/routes/types';

export function* requestRouteList() {
  try {
    const response: { value: Routes } = yield call(fetchRouteListItems);
    yield put(fetchRouteListItemsAction.success(response));
  } catch (error) {
    yield put(fetchRouteListItemsAction.failure(error));
  }
}

export function* routeListItemWatcher() {
  yield all([takeLatest(FETCH_ROUTE_LIST_ITEMS.REQUEST, requestRouteList)]);
}
