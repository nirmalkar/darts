import { IS_DRAWER_VISIBLE } from "../../constants/actionTypes/drawerActionTypes";

function drawerReducer(state = { isDrawerVisible: false }, action) {
  switch (action.type) {
    case IS_DRAWER_VISIBLE:
      return { ...state, isDrawerVisible: action.payload };
    default:
      return state;
  }
}
export { drawerReducer };
