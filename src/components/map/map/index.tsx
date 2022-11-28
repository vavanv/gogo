import * as React from 'react';
import ReactMapGL, { Marker, NavigationControl, GeolocateControl, Popup } from 'react-map-gl';
import { WithStyles, withStyles } from '@mui/styles';
import { Stop } from 'src/store/stops/types';
import { Pin } from '../pin';
import { StopInfo } from '../stop-info';

import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  stopList?: Stop[];
  children?: React.ReactNode;
}

const viewport = {
  latitude: 43.644549,
  longitude: -79.380171,
  zoom: 12.5,
  bearing: 0,
  pitch: 0,
};

const MapComponent = ({ classes, stopList, children }: Props & WithStyles<typeof styles>) => {
  const [selectedStop, setSelectedStop] = React.useState<null | Stop>(null);
  const [viewportState, setViewportState] = React.useState(viewport);

  // eslint-disable-next-line react/no-multi-comp
  const renderStopMarker = (stop: Stop, index: string | number) => {
    return (
      <Marker key={index} longitude={stop.longitude} latitude={stop.latitude}>
        <Pin stop={stop} onClick={() => setSelectedStop(stop)} />
      </Marker>
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderPopup: any = () => {
    return (
      selectedStop && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={selectedStop.longitude}
          latitude={selectedStop.latitude}
          closeOnClick={false}
          onClose={() => setSelectedStop(null)}
          dynamicPosition={false}
        >
          <StopInfo stop={selectedStop} />
        </Popup>
      )
    );
  };

  return (
    <ReactMapGL
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...viewportState}
      width="100%"
      height="100vh"
      onViewportChange={setViewportState}
      style={{ width: '100%', height: '100hv' }}
      mapStyle="mapbox://styles/mapbox/light-v10"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      className={classes.map}
    >
      {stopList && stopList.map(renderStopMarker)}

      {selectedStop && renderPopup()}

      <div className={classes.navigationControl}>
        <NavigationControl />
      </div>

      <GeolocateControl positionOptions={{ enableHighAccuracy: true }} />

      {children}
    </ReactMapGL>
  );
};

export const Map = React.memo(withStyles(styles)(MapComponent));
