import axios from "axios";
import { FETCH_ALL } from "../constants/actionTypes";

export const getPosts = () => async (dispatch) => {
  console.log("Works");
  try {
    const { data } = await axios.get("https://reqres.in/api/users?page=1");
    dispatch({ type: FETCH_ALL, payload: { data } });
  } catch (error) {
    console.log(error.message);
  }
};
