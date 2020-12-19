import { FETCH_BUGS, ADD_BUG } from "../constants";

const initialState = {
  bugs: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_BUG:
      return { ...state, bugs: [...state.bugs, action.payload] };
    case FETCH_BUGS:
      return { ...state, bugs: action.payload };
    default:
      return state;
  }
}
