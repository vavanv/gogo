import * as React from 'react';
import { WithStyles, withStyles } from '@mui/styles';
import { NavBar } from 'src/navigation';

import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  children?: React.ReactNode;
}

const MainContainerComponent = ({ children }: Props) => {
  return (
    <>
      <NavBar headerColor={'primary'} />
      <div>{children}</div>
    </>
  );
};

export const MainContainer = React.memo(withStyles(styles)(MainContainerComponent));
