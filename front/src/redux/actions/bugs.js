import { FETCH_BUGS, ADD_BUG, FETCH_SINGLE_BUG } from "../constants";
import axios from "axios";

export const addBug = (id, data) => (dispatch) => {
  return axios.post(`/api/tools/${id}/addBug`, data).then((response) => {
    dispatch({
      type: ADD_BUG,
      payload: response.data,
    });
  });
};

export const fetchBugs = (id) => (dispatch) => {
  return axios.get(`/api/tools/${id}/bugs`).then((response) =>
    dispatch({
      type: FETCH_BUGS,
      payload: response.data,
    })
  );
};

export const fetchSingleBug = (id) => (dispatch) => {
  return axios.get(`/api/tools/${id}/singleBug`).then((response) =>
    dispatch({
      type: FETCH_SINGLE_BUG,
      payload: response.data,
    })
  );
};
