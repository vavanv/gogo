import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchStopListItemsAction, showStopsAction } from 'src/features/stops/actions';
import { AppState } from 'src/store/types';
import { Stop } from 'src/store/stops/types';
import { Map } from 'src/components/map';
import { actions } from 'src/features/stops/constants';
import { ControlPanel } from '../control-panel';

const StopsFormComponent = () => {
  const dispatch = useDispatch();
  const stopList: Stop[] = useSelector((state: AppState) => state.stopList.items);

  React.useEffect(() => {
    var getShowStops = showStopsAction;
    dispatch(getShowStops(actions.NONE));
  }, [dispatch]);

  React.useEffect(() => {
    var getStops = fetchStopListItemsAction.request;
    dispatch(getStops(null));
  }, [dispatch]);

  return (
    <Map stopList={stopList}>
      <ControlPanel />
    </Map>
  );
};

export const StopsForm = StopsFormComponent;
