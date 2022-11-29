import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Stop } from 'src/store/stops/types';
import { Route } from 'src/store/routes/types';
import { Map } from 'src/components';
import { Payload } from 'src/store/types';
import { showStopsAction as showStops } from 'src/features/stops/actions';
import { actions } from 'src/features/stops/constants';
import { RouteplotOverlay } from 'src/components/index';
import { Shape } from 'src/store/shapes/types';
import { ControlPanel } from '../control-panel';

interface Props {
  fetchStopList: (payload: Payload) => void;
  fetchRouteList: (payload: Payload) => void;
  fetchShapeTrainsList: (payload: Payload) => void;
  stopList: Stop[];
  routeList: Route[];
  shapeTrainsList: Shape[];
  routeSelected: Route;
  showStops: ({ type }: Payload) => void;
}

const TrainRoutesForm = (props: Props) => {
  const { stopList, routeList, routeSelected, shapeTrainsList } = props;
  const dispatch = useDispatch();

  React.useEffect(() => {
    props.fetchShapeTrainsList(null);
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    props.fetchStopList(null);
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    props.fetchRouteList(null);
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    dispatch(showStops(actions.TRAINS));
    // eslint-disable-next-line
  }, []);

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

export const TrainRoutesFormComponent = TrainRoutesForm;
