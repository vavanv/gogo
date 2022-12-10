import { all, fork } from 'redux-saga/effects';

import { stopListItemWatcher } from 'src/features/stops/sagas';
import { shapeTrainsListItemsWatcher } from 'src/features/shapes-trains/sagas';
import { routeListItemWatcher } from 'src/features/routes/sagas';
import { trainTripsListItemWatcher } from 'src/features/train-trips/sagas';

export function* rootSaga() {
  yield all([
    fork(stopListItemWatcher),
    fork(shapeTrainsListItemsWatcher),
    fork(routeListItemWatcher),
    fork(trainTripsListItemWatcher),
  ]);
}
