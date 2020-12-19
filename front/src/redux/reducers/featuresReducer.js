import { FETCH_FEATURES, ADD_FEATURE } from "../constants";

const initialState = {
  features: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_FEATURE:
      return { ...state, features: [...state.features, action.payload] };
    case FETCH_FEATURES:
      return { ...state, features: action.payload };
    default:
      return state;
  }
}
