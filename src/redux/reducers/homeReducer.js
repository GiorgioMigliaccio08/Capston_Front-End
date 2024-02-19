import {
  GET_BOOKING,
  GET_ARCHIVE,
  GET_USER_LOGGED,
  LOGOUT_USER,
  GET_PRENOTAZIONI_DA_SALVARE,
  GET_PRENOTAZIONI_DA_MODIFICARE,
  GET_PRENOTAZIONI_DA_ELIMINARE,
} from "../actions";

const initialState = {
  prenotazioni: [],
  archive: [],
  user: null,
  prenotazioneSave: null,
  prenotazioneEdit: null,
  prenotazioneDelete: null,
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
    case GET_PRENOTAZIONI_DA_SALVARE:
      return {
        ...state,
        prenotazioneSave: action.payload,
      };
    case GET_PRENOTAZIONI_DA_MODIFICARE:
      return {
        ...state,
        prenotazioneEdit: action.payload,
      };
    case GET_PRENOTAZIONI_DA_ELIMINARE:
      return {
        ...state,
        prenotazioneDelete: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
