
// maybe import Action Types here

const INITIAL_STATE = {
  user: null,
  weight_log: [],
  meal_log: [],
  macro_log: [],
  macro: {},
  workout_log: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

