import {
  GET_ALL_PUB,
  GET_PUB,
  FAIL_PUB,
  LOAD_PUB,
  REGISTER_PUB,
  FILTER_PUB,
  DELETE_PUB,
  EDIT_PUB,
} from "../const/pub";
import axios from "axios";

export const registerPub = (pub) => async (dispatch) => {
  dispatch({ type: LOAD_PUB });
  try {
    const result = await axios.post("/pub/register", pub);
    dispatch({ type: REGISTER_PUB, payload: result.data });
  } catch (error) {
    const { errors } = error.response.data;
    if (Array.isArray(errors)) {
      errors.forEach((e) => alert(e.message));
    }
    //dispatch({ type: FAIL_PUB, payload: error.response.data });
  }
};

export const getpubById = (id) => async (dispatch) => {
  try {
    let result = await axios.get(`/pub/${id}`);
    dispatch({ type: GET_PUB, payload: result.data.response });
  } catch (e) {
    console.log(e.message);
  }
};

// searched = ''
// ?searched=${searched}

export const getpubs = () => async (dispatch) => {
  dispatch({ type: LOAD_PUB });

  try {
    let result = await axios.get('/pub');
    dispatch({ type: GET_ALL_PUB, payload: result.data.response });
  } catch (e) {
    dispatch({ type: FAIL_PUB, payload: e.message });
  }
};

export const filterPub = (titre) => async (dispatch) => {
  try {
    let result = await axios.get("/titre/:a?", titre);
    dispatch({ type: FILTER_PUB, payload: result.data.response });
  } catch (e) {
    dispatch({ type: FAIL_PUB, payload: e.message });
  }
};

export const deletePubById = (id) => async (dispatch) => {
  try {
    let result = await axios.deleteOne(`/pub/${id}`);
    dispatch({ type: DELETE_PUB, payload: result });
  } catch (e) {
    dispatch({ type: FAIL_PUB, payload: e.message });
  }
};

//Edit an existing pub

export const editPub = (id, pub) => async (dispatch) => {
  try {
    let result = await axios.put(`/pub/${id}`, pub);
    dispatch({ type: EDIT_PUB, payload: result.data.response });
    dispatch(getpubs());
  } catch (e) {
    dispatch({ type: FAIL_PUB, payload: e.message });
  }
};
