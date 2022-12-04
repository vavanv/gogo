import * as React from 'react';
import { Marker } from 'react-map-gl';
import { WithStyles, withStyles } from '@mui/styles';
import { useSelector, useDispatch } from 'react-redux';

import { AppState } from 'src/store/types';
import { Stop } from 'src/store/stops/types';
import { fetchStopListItemsAction } from 'src/features/stops/actions';
import { fetchShapeTrainsListItemsAction } from 'src/features/shapes-trains/actions';
import { fetchRouteListItemsAction } from 'src/features/routes/actions';
import { fetchTrainTripsListItemsAction } from 'src/features/train-trips/actions';
import { Route } from 'src/store/routes/types';
import { TrainTrip } from 'src/store/train-trips/types';
import { Map, TrainPin } from 'src/components';
import { RouteplotOverlay } from 'src/components/index';
import { Shape } from 'src/store/shapes/types';

import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {}

const TrainRoutesOnLineFormComponent = ({ classes }: Props) => {
  const dispatch = useDispatch();

  const stopList: Stop[] = useSelector((state: AppState) => state.stopList.items);
  const shapeTrainsList: Shape[] = useSelector((state: AppState) => state.shapeTrainsList.items);
  const routeList = useSelector((state: AppState) => state.routeList.items);
  const trainTripsList = useSelector((state: AppState) => state.trainTripsList.items);

  React.useEffect(() => {
    var getStops = fetchStopListItemsAction.request;
    dispatch(getStops(null));
  }, [dispatch]);

  React.useEffect(() => {
    var fetchShapeTrainsList = fetchShapeTrainsListItemsAction.request;
    dispatch(fetchShapeTrainsList(null));
  }, [dispatch]);

  React.useEffect(() => {
    var fetchRouteList = fetchRouteListItemsAction.request;
    dispatch(fetchRouteList(null));
  }, [dispatch]);

  React.useEffect(() => {
    var fetchTrainTripsList = fetchTrainTripsListItemsAction.request;
    dispatch(fetchTrainTripsList(null));
  }, [dispatch]);

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

export const TrainRoutesOnLineForm = React.memo(withStyles(styles)(TrainRoutesOnLineFormComponent));
