import * as React from 'react';
import { Stop } from 'src/store/stops/types';

import {
  Train as TrainIcon,
  DirectionsBus as BusIcon,
  DeviceHub as TransportationHubIcon,
} from '@mui/icons-material';

interface Props {
  stop: Stop;
  onClick: () => void;
}

const PinComponent = (props: Props) => {
  return (
    <>
      {props.stop.isBus && props.stop.isTrain ? (
        <TransportationHubIcon fontSize="small" onClick={props.onClick} />
      ) : props.stop.isTrain ? (
        <TrainIcon fontSize="small" onClick={props.onClick} />
      ) : (
        <BusIcon fontSize="small" onClick={props.onClick} />
      )}
    </>
  );
};

export const Pin = React.memo(PinComponent);
