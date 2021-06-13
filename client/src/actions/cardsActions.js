import { FETCH_ALL, CREATE, UPDATE, DELETE, UPDATE_LIKE} from "../constants/actionTypes.js";
import * as api from "../services/service.js";

export const getMemories = () => async (dispatch) => {
  try {
    const { data } = await api.getAllMemories();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createMemory = (postData) => async (dispatch) => {
  try {
    const { data } = await api.createMemory(postData);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateMemory = (id,updateData) => async (dispatch) => {
  try {
    const { data } = await api.updateMemory(id,updateData);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteMemory = (id) => async (dispatch) => {
  try {
    await api.deleteMemory(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const likeMemory = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeMemory(id);
    dispatch({ type: UPDATE_LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
