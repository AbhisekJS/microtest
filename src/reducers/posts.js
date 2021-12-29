import { FETCH_ALL } from "../constants/actionTypes";

export default (state = { posts: [] }, action) => {
  switch (action.type) {
    case FETCH_ALL:
      localStorage.setItem(
        "users",
        JSON.stringify({ ...action?.payload.data.data })
      );
      return {
        ...state,
        posts: action.payload.data.data,
      };
    default:
      return state;
  }
};
