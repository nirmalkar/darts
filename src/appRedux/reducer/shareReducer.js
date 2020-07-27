import { CHANGE_SHARE_DATA } from "../../constants/actionTypes/shareActionTypes";
import { ISharesData } from "../../constants/data/IShareData";
function shareReducer(state = { shareData: [...ISharesData] }, action) {
  switch (action.type) {
    case CHANGE_SHARE_DATA:
      return { ...state, loading: false, shareData: action.payload };
    default:
      return state;
  }
}
export { shareReducer };
