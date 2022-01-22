import initialState from "./state";

export default function reducers(state = initialState, action) {
  switch (action.type) {
    case "SET_THEME": {
      return { ...state, theme: action.payload };
    }
    default:
      return state;
  }
}
