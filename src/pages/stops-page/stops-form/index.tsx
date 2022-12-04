import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchStopListItemsAction } from 'src/features/stops/actions';
import { AppState } from 'src/store/types';
import { Stop } from 'src/store/stops/types';
import { Map } from 'src/components/map';

const StopsFormComponent = () => {
  const dispatch = useDispatch();
  const stopList: Stop[] = useSelector((state: AppState) => state.stopList.items);

  React.useEffect(() => {
    var getStops = fetchStopListItemsAction.request;
    dispatch(getStops(null));
  }, [dispatch]);

  return <Map stopList={stopList} />;
};

export const StopsForm = StopsFormComponent;
