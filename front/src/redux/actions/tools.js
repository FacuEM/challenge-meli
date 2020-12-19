import { ADD_TOOL, FETCH_TOOLS, FETCH_SINGLE_TOOL } from "../constants";
import axios from "axios";

export const addTool = (data) => (dispatch) => {
  return axios.post("/api/tools/", data).then((response) =>
    dispatch({
      type: ADD_TOOL,
      payload: response.data,
    })
  );
};

export const fetchTools = () => (dispatch) => {
  return axios.get("/api/tools/").then((response) =>
    dispatch({
      type: FETCH_TOOLS,
      payload: response.data,
    })
  );
};

export const fetchSingleTool = (id) => (dispatch) => {
  return axios.get(`/api/tools/${id}`).then((response) =>
    dispatch({
      type: FETCH_SINGLE_TOOL,
      payload: response.data,
    })
  );
};
