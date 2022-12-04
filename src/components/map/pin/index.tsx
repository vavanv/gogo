import * as React from 'react';
import { Stop } from 'src/store/stops/types';

// import { Train as TrainIcon } from '@mui/icons-material';
import { HomeWork as StationIcon } from '@mui/icons-material';

interface Props {
  stop: Stop;
  onClick: () => void;
}

const PinComponent = (props: Props) => {
  return <StationIcon fontSize="small" onClick={props.onClick} />;
};

export const Pin = React.memo(PinComponent);
