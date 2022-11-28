import { Theme } from '@mui/material';
import { createStyles } from '@mui/styles';

export const styles = ({ spacing }: Theme) => {
  return createStyles({
    map: {
      width: '100vw',
      height: '100vh',
    },
    navigationControl: {
      position: 'absolute',
      left: spacing(0.5),
      top: spacing(8.5),
      padding: spacing(1),
      margin: spacing(1),
    },
  });
};
