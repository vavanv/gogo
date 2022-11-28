import { WithStyles, withStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';

import { styles } from './styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GridContainerComponent = (props: any & WithStyles<typeof styles>) => {
  const { classes, children, ...rest } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Grid container {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
};

export const GridContainer = withStyles(styles)(GridContainerComponent);
