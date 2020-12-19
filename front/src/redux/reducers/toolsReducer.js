import { ADD_TOOL, FETCH_TOOLS, FETCH_SINGLE_TOOL } from "../constants";

const initialState = {
  tools: [],
  tool: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TOOL:
      return { ...state, tools: [...state.tools, action.payload] };
    case FETCH_TOOLS:
      return { ...state, tools: action.payload };
    case FETCH_SINGLE_TOOL:
      return { ...state, tool: action.payload };
    default:
      return state;
  }
}
