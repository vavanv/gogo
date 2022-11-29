import * as React from 'react';

import { MainContainer } from '../../pages/main-container';
import { TrainRoutesForm } from './train-routes-form';

function TrainRoutesComponent() {
  return (
    <MainContainer>
      <TrainRoutesForm />
    </MainContainer>
  );
}

export const TrainRoutes = React.memo(TrainRoutesComponent);
