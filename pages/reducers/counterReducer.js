import { DECREMENT, INCREMENT, UPDATE_BY_VALUE } from "../action/types";
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case DECREMENT:
        console.log(state);
      return { ...state, count: state.count - 1 }
    case INCREMENT:
      return { ...state, count: state.count + 1 }
    case UPDATE_BY_VALUE:
      return { ...state, count: state.count + action.value  }
    default:
      return state;
  }
};
export default countReducer;
