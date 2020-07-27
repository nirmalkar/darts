import { CHANGE_SHARE_DATA } from "../../constants/actionTypes/shareActionTypes";
import { ISharesData } from "../../constants/data/IShareData";

const changeShareData = (data) => (dispatch) => {
  ISharesData.map((share) => {
    if (share.id === data.id) {
      share.price = JSON.parse(data.price);
      share.quantity = JSON.parse(data.quantity);
      share.investedAmount = data.investedAmount;
    }
    return share;
  });
  dispatch({ type: CHANGE_SHARE_DATA, payload: ISharesData, loading: true });
};

export { changeShareData };
