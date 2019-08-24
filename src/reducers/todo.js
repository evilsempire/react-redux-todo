import _ from "lodash";

const initialState = [];

//function
export default function(state = initialState, action) {
  switch (action.type) {
    case "FETCH_TODOS":
      return action.payload;

    case "ADD_TODO":
      return [
        ...state,
        {
          taskName: action.payload,
          id: Math.random(),
          completed: false
        }
      ];

    case "TOGGLE_TODO":
      //GET
      let newState = _.forEach(state, function(o) {
        if (o.id === action.payload) return _.set(o, "completed", !o.completed);
      });
      return [...newState];

    default:
      return state;
  }
}
