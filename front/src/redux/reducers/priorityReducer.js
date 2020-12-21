import {
  ADD_STARS_BUG,
  ADD_STARS_FT,
  FETCH_STARS_BUG,
  FETCH_STARS_FT,
} from "../constants";

const initialState = {
  starsFt: [],
  starsBug: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_STARS_FT:
      return { ...state, starsFt: [...state.starsFt, action.payload] };
    case FETCH_STARS_FT:
      return { ...state, starsFt: action.payload };
    case ADD_STARS_BUG:
      return { ...state, starsBug: [...state.starsBug, action.payload] };
    case FETCH_STARS_BUG:
      return { ...state, starsBug: action.payload };
    default:
      return state;
  }
}
