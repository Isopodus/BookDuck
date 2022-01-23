const SET_ACTIONS = {
  theme: "SET_THEME",
  loading: "SET_IS_LOADING",
  modal: "SET_MODAL",
};
const CLEAN_ACTIONS = {};

export const setAction = (type, payload) => {
  return { type: SET_ACTIONS[type], payload };
};
export const cleanAction = type => {
  return { type: CLEAN_ACTIONS[type] };
};
