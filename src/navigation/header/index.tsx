import * as React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  AppBar,
  Toolbar,
  IconButton,
  CircularProgress,
  Typography,
  Menu,
  MenuItem,
  Fade,
} from '@mui/material';
import { WithStyles, withStyles } from '@mui/styles';
import { Menu as MenuIcon, Language as LanguageIcon } from '@mui/icons-material';
import { useIntl } from 'react-intl';
import { selectLanguageAction as selectLanguage } from 'src/features/intl/actions';
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
  const dispatch = useDispatch();
  const navBar = useSelector((s: AppState) => s.ui.navBar);
  const userCulture = useSelector((s: AppState) => s.userCulture);

  const { classes, handleToggle, color } = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose(event: React.MouseEvent<HTMLElement>) {
    dispatch(selectLanguage(event.currentTarget.id));
    setAnchorEl(null);
  }

  return (
    <AppBar color={color}>
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" onClick={handleToggle}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" color="inherit" className={classes.grow}>
          {intl.formatMessage({ id: messages.appName })}
        </Typography>
        <IconButton color="inherit" onClick={handleClick}>
          <LanguageIcon />
        </IconButton>
        <Typography variant="subtitle2" color="inherit" className={classes.languageButton}>
          {'\xa0'}
          {userCulture.code.split('-')[0].toUpperCase()}
        </Typography>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem id="en-US" onClick={handleClose}>
            English
          </MenuItem>
          <MenuItem id="fr-FR" onClick={handleClose}>
            Français
          </MenuItem>
        </Menu>
        {navBar.loading && <CircularProgress size={24} color="inherit" />}
      </Toolbar>
    </AppBar>
  );
}

export const Header = React.memo(withStyles(styles)(HeaderComponent));
