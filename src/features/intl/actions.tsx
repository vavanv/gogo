import { Payload } from 'src/store/types';

export const SELECT_LANGUAGE = 'SELECT_LANGUAGE';
export const selectLanguageAction = (payload: Payload) => ({
  type: SELECT_LANGUAGE,
  payload,
});
