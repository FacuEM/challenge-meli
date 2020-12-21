import {
  FETCH_FEATURES,
  ADD_FEATURE,
  FETCH_SINGLE_FEATURE,
} from "../constants";

const initialState = {
  features: [],
  feature: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_FEATURE:
      return { ...state, features: [...state.features, action.payload] };
    case FETCH_FEATURES:
      return { ...state, features: action.payload };
    case FETCH_SINGLE_FEATURE:
      return { ...state, feature: action.payload };
    default:
      return state;
  }
}
