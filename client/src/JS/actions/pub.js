import { ALL_PUB, FAIL_PUB, LOAD_PUB, REGISTER_PUB } from "../const/pub";
import axios from "axios";

export const registerPub = (pub) => async (dispatch) => {
    dispatch({ type: LOAD_PUB });
    try {
      const result = await axios.post("/pub/register", pub);
      dispatch({ type: REGISTER_PUB, payload: result.data });
      
    } catch (error) {
      const {errors} = error.response.data;
  if (Array.isArray(errors)){
    errors.forEach((err) => alert(err.msg));
  }
      //dispatch({ type: FAIL_PUB, payload: error.response.data });
    }
  };


  export const AllPub = () => async (dispatch) => {
    dispatch({ type: LOAD_PUB });
   
    try {
      let result = await axios.get("/pub/register");
      dispatch({ type: ALL_PUB, payload: result.data });
    } catch (error) {
      dispatch({ type: FAIL_PUB, payload: error.response.data });
    }
  };