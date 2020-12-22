import {
  FETCH_FEATURES,
  ADD_FEATURE,
  FETCH_SINGLE_FEATURE,
} from "../constants";
import axios from "axios";

export const addFeature = (id, data) => (dispatch) => {
  return axios.post(`/api/feature/${id}/addFeature`, data).then((response) => {
    dispatch({
      type: ADD_FEATURE,
      payload: response.data,
    });
  });
};

export const fetchFeatures = (id) => (dispatch) => {
  return axios.get(`/api/feature/${id}/features`).then((response) =>
    dispatch({
      type: FETCH_FEATURES,
      payload: response.data,
    })
  );
};

export const fetchSingleFeature = (id) => (dispatch) => {
  return axios.get(`/api/feature/${id}/singleFeature`).then((response) =>
    dispatch({
      type: FETCH_SINGLE_FEATURE,
      payload: response.data,
    })
  );
};

export const completeFeature = (id, toolId) => (dispatch) => {
  return axios.put(`/api/feature/${id}/complete/${toolId}`).then((response) =>
    dispatch({
      type: FETCH_FEATURES,
      payload: response.data,
    })
  );
};

export const activeFeature = (id, toolId) => (dispatch) => {
  return axios.put(`/api/feature/${id}/active/${toolId}`).then((response) =>
    dispatch({
      type: FETCH_FEATURES,
      payload: response.data,
    })
  );
};
