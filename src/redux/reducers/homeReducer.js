import {
  GET_BOOKING,
  GET_ARCHIVE,
  GET_USER_LOGGED,
  LOGOUT_USER,
} from "../actions";

const initialState = {
  prenotazioni: [],
  archive: [],
  user: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKING:
      return {
        ...state,
        prenotazioni: action.payload,
      };
    case GET_ARCHIVE:
      return {
        ...state,
        archivio: action.payload,
      };
    case GET_USER_LOGGED:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default homeReducer;
