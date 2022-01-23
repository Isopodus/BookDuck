import initialState from "./state";

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case "SET_THEME": {
      return { ...state, theme: action.payload };
    }
    case "SET_IS_LOADING": {
      return { ...state, isLoading: action.payload };
    }
    case "SET_MODAL": {
      return { ...state, isModal: action.payload };
    }
    default:
      return state;
  }
}
