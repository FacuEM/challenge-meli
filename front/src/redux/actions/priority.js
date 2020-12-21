import {
  ADD_STARS_BUG,
  ADD_STARS_FT,
  FETCH_STARS_BUG,
  FETCH_STARS_FT,
} from "../constants";
import axios from "axios";

export const addPriorityFt = (id, data) => (dispatch) => {
  return axios.post(`/api/stars/addToFt/${id}`, data).then((response) => {
    dispatch({
      type: ADD_STARS_FT,
      payload: response.data,
    });
  });
};

export const fetchStarsFt = (id) => (dispatch) => {
  return axios.get(`/api/stars/fetchFromFt/${id}`).then((response) =>
    dispatch({
      type: FETCH_STARS_FT,
      payload: response.data,
    })
  );
};

export const addPriorityBug = (id, data) => (dispatch) => {
  return axios.post(`/api/stars/addToBug/${id}`, data).then((response) => {
    dispatch({
      type: ADD_STARS_BUG,
      payload: response.data,
    });
  });
};

export const fetchStarsBugs = (id) => (dispatch) => {
  return axios.get(`/api/stars/fetchFromBug/${id}`).then((response) =>
    dispatch({
      type: FETCH_STARS_BUG,
      payload: response.data,
    })
  );
};
