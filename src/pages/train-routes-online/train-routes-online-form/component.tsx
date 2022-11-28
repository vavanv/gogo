import * as React from 'react';
import { Marker } from 'react-map-gl';
import { WithStyles, withStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';

import { Stop } from 'src/store/stops/types';
import { Route } from 'src/store/routes/types';
import { TrainTrip } from 'src/store/train-trips/types';
import { Map, TrainPin } from 'src/components';
import { Payload } from 'src/store/types';
import { showStopsAction as showStops } from 'src/features/stops/actions';
import { actions } from 'src/features/stops/constants';
import { RouteplotOverlay } from 'src/components/index';
import { Shape } from 'src/store/shapes/types';

import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  fetchStopList: (payload: Payload) => void;
  fetchRouteList: (payload: Payload) => void;
  fetchShapeTrainsList: (payload: Payload) => void;
  fetchTrainTripsList: (payload: Payload) => void;
  stopList: Stop[];
  routeList: Route[];
  shapeTrainsList: Shape[];
  trainTripsList: TrainTrip[];
  showStops: ({ type }: Payload) => void;
}

const TrainRoutesOnLineForm = (props: Props) => {
  const { classes, stopList, routeList, shapeTrainsList, trainTripsList } = props;
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

  React.useEffect(() => {
    props.fetchTrainTripsList(null);
    // eslint-disable-next-line
  }, []);

  const getTrains = trainTripsList.map((tt: TrainTrip) => {
    return (
      <Marker
        key={tt.tripNumber}
        longitude={tt.longitude}
        latitude={tt.latitude}
        // captureDrag={false}
        // captureDoubleClick={false}
      >
        <div className={classes.station}>
          <TrainPin />
          <span>{tt.display}</span>
        </div>
      </Marker>
    );
  });

  const getTrainRoutes = routeList.map((r: Route) => {
    const shapes: Shape[] = shapeTrainsList.filter(s => s.shapeId === r.shapeId);
    const points = shapes.map((shape: Shape) => [shape.lon, shape.lat]);
    const color = `#${r.color}`;
    return (
      <RouteplotOverlay
        key={r.key}
        lineSize={1}
        lineColor={color}
        renderWhileDragging={true}
        points={points}
      />
    );
  });

  return (
    <>
      <Map stopList={stopList}>
        {getTrainRoutes}
        {getTrains}
      </Map>
    </>
  );
};

export const TrainRoutesOnLineFormComponent = React.memo(withStyles(styles)(TrainRoutesOnLineForm));
