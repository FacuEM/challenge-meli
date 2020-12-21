import { FETCH_BUGS, ADD_BUG, FETCH_SINGLE_BUG } from "../constants";

const initialState = {
  bugs: [],
  bug: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_BUG:
      return { ...state, bugs: [...state.bugs, action.payload] };
    case FETCH_BUGS:
      return { ...state, bugs: action.payload };
    case FETCH_SINGLE_BUG:
      return { ...state, bug: action.payload };
    default:
      return state;
  }
}
