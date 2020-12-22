import { FETCH_BUGS, ADD_BUG, FETCH_SINGLE_BUG } from "../constants";
import axios from "axios";

export const addBug = (id, data) => (dispatch) => {
  return axios.post(`/api/bug/${id}/addBug`, data).then((response) => {
    dispatch({
      type: ADD_BUG,
      payload: response.data,
    });
  });
};

export const fetchBugs = (id) => (dispatch) => {
  return axios.get(`/api/bug/${id}/bugs`).then((response) =>
    dispatch({
      type: FETCH_BUGS,
      payload: response.data,
    })
  );
};

export const fetchSingleBug = (id) => (dispatch) => {
  return axios.get(`/api/bug/${id}/singleBug`).then((response) =>
    dispatch({
      type: FETCH_SINGLE_BUG,
      payload: response.data,
    })
  );
};

export const completeBug = (id, toolId) => (dispatch) => {
  return axios.put(`/api/bug/${id}/complete/${toolId}`).then((response) =>
    dispatch({
      type: FETCH_BUGS,
      payload: response.data,
    })
  );
};

export const activeBug = (id, toolId) => (dispatch) => {
  return axios.put(`/api/bug/${id}/active/${toolId}`).then((response) =>
    dispatch({
      type: FETCH_BUGS,
      payload: response.data,
    })
  );
};
