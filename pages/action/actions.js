import { DECREMENT, INCREMENT, UPDATE_BY_VALUE } from "./types";

export const increment = (dispatch) => {
  dispatch({
    type: INCREMENT,
  });
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
export const updateByValue = (vl) => {
  return {
    type: UPDATE_BY_VALUE,
    value: vl,
  };
};
