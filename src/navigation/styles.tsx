import { createStyles } from '@mui/styles';
import { drawerBackGround } from 'src/assets/jss/portal-material';

const color = 'rgba(255, 255, 255, 0.7)';

export const styles = createStyles({
  drawer: {
    background: drawerBackGround,
    '& *': {
      color,
    },
  },
});
