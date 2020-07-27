import { IS_DRAWER_VISIBLE } from "../../constants/actionTypes/drawerActionTypes";

const drawerVisible = (data) => (dispatch) => {
  dispatch({ type: IS_DRAWER_VISIBLE, payload: data });
};

export { drawerVisible };
