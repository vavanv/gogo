import { ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { WithStyles, withStyles } from '@mui/styles';
import classnames from 'classnames';
import { Settings as SettingsIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';

import { TitleItem } from '../../../../navigation/menu-items/index';

import messages from './messages';
import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  handleToggle: () => void;
  titleItems: TitleItem[];
}

function TitleSettingsComponent(props: Props) {
  const intl = useIntl();
  const { classes, handleToggle, titleItems } = props;
  const items = titleItems.map(({ id, icon, visible, route }) => {
    // eslint-disable-next-line no-nested-ternary
    return visible ? (
      route ? (
        <Link to={route} key={id}>
          <ListItem button onClick={handleToggle} className={classes.headerItem} key={id}>
            <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
            <ListItemText
              primary={intl.formatMessage({ id: id })}
              classes={{ primary: classes.itemText }}
            />
          </ListItem>
        </Link>
      ) : (
        <ListItem button className={classes.headerItem} key={id}>
          <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
          <ListItemText
            primary={intl.formatMessage({ id: id })}
            classes={{ primary: classes.itemText }}
          />
        </ListItem>
      )
    ) : null;
  });
  return (
    <>
      <ListItem className={classnames(classes.header, classes.unPaddedRight)}>
        <ListItemText classes={{ primary: classes.itemText }}>
          {intl.formatMessage({ id: messages.configuration })}
        </ListItemText>
        <IconButton disableRipple className={classes.smallIcon}>
          <SettingsIcon />
        </IconButton>
      </ListItem>
      {items}
    </>
  );
}

export const TitleSettings = withStyles(styles)(TitleSettingsComponent);
