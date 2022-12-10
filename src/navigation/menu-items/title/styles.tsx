import { Theme } from '@mui/material';
import { createStyles } from '@mui/styles';
import { dividerColor, headerBackground } from 'src/assets/jss/portal-material';

export const styles = ({ spacing }: Theme) =>
  createStyles({
    header: {
      background: headerBackground,
      boxShadow: `inset 0 -1px ${dividerColor}`,
    },
    itemIcon: {
      margin: 0,
    },
    baseHeader: {
      marginLeft: spacing(1),
    },
  });
