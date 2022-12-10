import { combineReducers } from 'redux';
import {
  initialState as initialUINavBarState,
  uiNavBarReducer,
} from 'src/store/ui/nav-bar/reducer';
import { UIState } from 'src/store/ui/types';

export const initialUIState: UIState = {
  navBar: initialUINavBarState,
};

export const uiReducer = combineReducers({
  navBar: uiNavBarReducer,
});
