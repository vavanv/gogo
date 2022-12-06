import { createSelector } from 'reselect';

import { getLocaleMessages } from 'src/intl/locales';
import { selectUserCultureCode } from 'src/features/userCulture/selectors';

export const selectMessages = createSelector(selectUserCultureCode, getLocaleMessages);
