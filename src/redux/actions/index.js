export const GET_BOOKING = "GET_BOOKING";
export const GET_ARCHIVE = " GET_ARCHIVE";
export const GET_USER_LOGGED = "GET_USER_LOGGED";
export const LOGOUT_USER = "LOGOUT_USER";
export const GET_PRENOTAZIONI_DA_SALVARE = "salva";
export const GET_PRENOTAZIONI_DA_MODIFICARE = "modifica";
export const GET_PRENOTAZIONI_DA_ELIMINARE = "elimina";

export const getBookingSave = (booking) => ({
  type: GET_PRENOTAZIONI_DA_SALVARE,
  payload: booking,
});
export const getBookingModify = (booking) => ({
  type: GET_PRENOTAZIONI_DA_MODIFICARE,
  payload: booking,
});
export const getBookingDelete = (booking) => ({
  type: GET_PRENOTAZIONI_DA_ELIMINARE,
  payload: booking,
});

export const getBooking = (url) => {
  const token = localStorage.getItem("token");

  return async (dispatch) => {
    try {
      let resp = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        let prenotazioni = await resp.json();
        prenotazioni.content.sort(() => Math.random() - 0.5);

        dispatch({ type: GET_BOOKING, payload: prenotazioni.content });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserLoggedAction = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  const url = "http://localhost:3001/users/me";
  return async (dispatch) => {
    try {
      let resp = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        let data = await resp.json();

        dispatch({ type: GET_USER_LOGGED, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const logoutUserAction = () => {
  return { type: LOGOUT_USER };
};

export const getArchive = (url) => {
  const token = localStorage.getItem("token");

  return async (dispatch) => {
    try {
      let resp = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.ok) {
        let archive = await resp.json();

        dispatch({ type: GET_ARCHIVE, payload: archive });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
