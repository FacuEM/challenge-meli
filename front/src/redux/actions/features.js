import {
  FETCH_FEATURES,
  ADD_FEATURE,
  FETCH_SINGLE_FEATURE,
} from "../constants";
import axios from "axios";

export const addFeature = (id, data) => (dispatch) => {
  return axios.post(`/api/tools/${id}/addFeature`, data).then((response) => {
    dispatch({
      type: ADD_FEATURE,
      payload: response.data,
    });
  });
};

export const fetchFeatures = (id) => (dispatch) => {
  return axios.get(`/api/tools/${id}/features`).then((response) =>
    dispatch({
      type: FETCH_FEATURES,
      payload: response.data,
    })
  );
};

export const fetchSingleFeature = (id) => (dispatch) => {
  return axios.get(`/api/tools/${id}/singleFeature`).then((response) =>
    dispatch({
      type: FETCH_SINGLE_FEATURE,
      payload: response.data,
    })
  );
};
