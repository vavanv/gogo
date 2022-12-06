import { mergeRight } from 'ramda';

import { SELECT_LANGUAGE } from 'src/features/intl/actions';
import { UserCultureState } from 'src/store/userCulture/types';
import { AnyAction } from 'src/store/types';
import { LOCALE, getLanguage } from 'src/intl/locales/index';
import { LOGIN, LOGOUT, FETCH_USER } from './actions';

export const initialState: UserCultureState = {
  code: getLanguage(),
};

const reducer = (state = initialState, action: AnyAction): UserCultureState => {
  switch (action.type) {
    case SELECT_LANGUAGE: {
      localStorage.setItem(LOCALE, action.payload);

      return mergeRight(state, {
        culture: {
          cultureCode: action.payload,
        },
      });
    }
    case LOGIN.SUCCESS: {
      return mergeRight(state, {
        token: action.payload,
        authenticated: true,
      });
    }
    case FETCH_USER.SUCCESS: {
      return mergeRight(state, {
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        isAdministrator: action.payload.isAdministrator,
      });
    }
    case LOGOUT:
      return initialState;
    case LOGIN.FAILURE:
      return mergeRight(state, {
        authenticated: false,
      });
    default:
      return state;
  }
};

export { reducer as userCultureReducer };
