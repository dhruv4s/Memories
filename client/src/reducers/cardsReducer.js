import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  UPDATE_LIKE,
} from "../constants/actionTypes.js";

const CardsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...state, action.payload];
    case UPDATE:
    case UPDATE_LIKE:
      return state.map((memory) =>
        memory._id === action.payload._id ? action.payload : memory
      );
    case DELETE:
      return state.filter((memory) => memory._id !== action.payload);
    default:
      return state;
  }
};

export default CardsReducer;
