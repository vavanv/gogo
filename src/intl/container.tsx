import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectMessages } from 'src/features/intl/selectors';
import { selectUserCultureCode } from 'src/features/userCulture/selectors';
import { Intl } from 'src/intl/component';
import { AppState } from 'src/store/types';

export const mapStateToProps = createStructuredSelector<
  AppState,
  {
    userCultureCode: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    messages: any;
  }
>({
  userCultureCode: selectUserCultureCode,
  messages: selectMessages,
});

export const IntlContainer = connect(mapStateToProps)(Intl);
