import * as React from 'react';
import TrainIcon from '@mui/icons-material/Train';

const TrainPinComponent = () => {
  return <TrainIcon fontSize="small" color="error" />;
};

export const TrainPin = React.memo(TrainPinComponent);
