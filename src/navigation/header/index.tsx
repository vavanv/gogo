import * as React from 'react';

import { useSelector } from 'react-redux';
import { AppBar, Toolbar, IconButton, CircularProgress, Typography } from '@mui/material';
import { WithStyles, withStyles } from '@mui/styles';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useIntl } from 'react-intl';
import { AppState } from 'src/store/types';

import messages from './messages';
import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  handleToggle: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  color: any;
}

function HeaderComponent(props: Props) {
  const intl = useIntl();
  const navBar = useSelector((s: AppState) => s.ui.navBar);

  const { classes, handleToggle, color } = props;

  return (
    <AppBar color={color}>
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" onClick={handleToggle}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" color="inherit" className={classes.grow}>
          {intl.formatMessage({ id: messages.appName })}
        </Typography>
        {navBar.loading && <CircularProgress size={24} color="inherit" />}
      </Toolbar>
    </AppBar>
  );
}

export const Header = React.memo(withStyles(styles)(HeaderComponent));
