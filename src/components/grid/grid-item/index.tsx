import { WithStyles, withStyles } from '@mui/styles';
import { Grid } from '@mui/material';

import { styles } from './styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GridItemComponent = (props: any & WithStyles<typeof styles>) => {
  const { classes, children, className = '', ...rest } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Grid item {...rest} className={`${classes.grid} ${className}`}>
      {children}
    </Grid>
  );
};

export const GridItem = withStyles(styles)(GridItemComponent);
