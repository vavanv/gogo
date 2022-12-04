import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppState } from 'src/store/types';
import { Stop } from 'src/store/stops/types';
import { Route } from 'src/store/routes/types';
import { Map } from 'src/components';
import { fetchStopListItemsAction } from 'src/features/stops/actions';
import { fetchShapeTrainsListItemsAction } from 'src/features/shapes-trains/actions';
import { fetchRouteListItemsAction } from 'src/features/routes/actions';
import { RouteplotOverlay } from 'src/components/index';
import { Shape } from 'src/store/shapes/types';
import { ControlPanel } from '../control-panel';

const TrainRoutesFormComponent = () => {
  const dispatch = useDispatch();

  const stopList: Stop[] = useSelector((state: AppState) => state.stopList.items);
  const routeList = useSelector((state: AppState) => state.routeList.items);
  const shapeTrainsList: Shape[] = useSelector((state: AppState) => state.shapeTrainsList.items);
  const routeSelected: Route = useSelector((state: AppState) => state.routeSelected);

  React.useEffect(() => {
    var getStops = fetchStopListItemsAction.request;
    dispatch(getStops(null));
  }, [dispatch]);

  React.useEffect(() => {
    var fetchRouteList = fetchRouteListItemsAction.request;
    dispatch(fetchRouteList(null));
  }, [dispatch]);

  React.useEffect(() => {
    var fetchShapeTrainsList = fetchShapeTrainsListItemsAction.request;
    dispatch(fetchShapeTrainsList(null));
  }, [dispatch]);

  const shapes: Shape[] = shapeTrainsList.filter(s => s.shapeId === routeSelected.shapeId);
  const points = shapes.map((shape: Shape) => [shape.lon, shape.lat]);
  const color = `#${routeSelected.color}`;
  return (
    <>
      <Map stopList={stopList}>
        <RouteplotOverlay
          lineSize={1}
          lineColor={color}
          renderWhileDragging={true}
          points={points}
        />
      </Map>
      <ControlPanel routeList={routeList} />
    </>
  );
};

export const TrainRoutesForm = TrainRoutesFormComponent;
