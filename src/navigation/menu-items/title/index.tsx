import * as React from 'react';
import { ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { WithStyles, withStyles } from '@mui/styles';
import classnames from 'classnames';
import { EmojiTransportation as TransportationIcon } from '@mui/icons-material';
import { useIntl } from 'react-intl';

import { TitleItem } from 'src/navigation/menu-items/index';
import { TitleSettings } from './settings';

import messages from './messages';
import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  classes: any;
  handleToggle: () => void;
  titleItems: TitleItem[];
}

function TitleComponent(props: Props) {
  const intl = useIntl();
  const { classes, handleToggle, titleItems } = props;
  return (
    <>
      <ListItem className={classes.header}>
        <ListItemIcon className={classes.itemIcon}>
          <TransportationIcon />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="h6">{intl.formatMessage({ id: messages.application })}</Typography>
          }
          className={classnames(classes.baseHeader)}
        />
      </ListItem>
      <TitleSettings titleItems={titleItems} handleToggle={handleToggle} />
    </>
  );
}

export const Title = React.memo(withStyles(styles)(TitleComponent));
