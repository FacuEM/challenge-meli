import { IS_LOGGED } from "../constants";
import axios from "axios";

export const isLogged = (user) => {
  return {
    type: IS_LOGGED,
    payload: user,
  };
};

export const register = (data) => (dispatch) => {
  return axios.post("/api/auth/register", data);
};

export const login = (data) => (dispatch) => {
  return axios
    .post("/api/auth/login", data)
    .then((response) => dispatch(isLogged(response.data)));
};
// requests the data of the logged in user (used for persistence)
export const fetchUser = () => (dispatch) => {
  return axios
    .get("/api/auth/me")
    .then((response) => dispatch(isLogged(response.data)));
};

export const logout = () => (dispatch) => {
  return axios.post("/api/auth/logout").then(() => dispatch(isLogged({})));
};
