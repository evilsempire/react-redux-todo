import _ from "lodash";
//fetch to do
export const fetchToDos = () => (dispatch) => {
  let todo = localStorage.getItem("todo");

  todo = todo ? JSON.parse(todo) : [];

  dispatch({
    type: "FETCH_TODOS",
    payload: todo
  });
};

//ADD TO DO ACTION
export const addToDo = (taskName) => {
  let payload = { taskName, id: Math.random(), completed: false };

  let todo = localStorage.getItem("todo");

  todo = todo ? JSON.parse(todo) : [];

  todo = [...todo, payload];
  localStorage.setItem("todo", JSON.stringify(todo));
  return {
    type: "ADD_TODO",
    payload: taskName
  };
};

//toggle todo
export const toggleToDo = (id) => {
  let todo = localStorage.getItem("todo");

  todo = todo ? JSON.parse(todo) : [];

  //now let newState = _.forEach(state, function(o) {
  todo = _.forEach(todo, function(o) {
    if (o.id === id) return _.set(o, "completed", !o.completed);
  });

  localStorage.setItem("todo", JSON.stringify(todo));

  return {
    type: "TOGGLE_TODO",
    payload: id
  };
};

//visibility filter
export const setVisibilityFilter = (visibilityFlag) => {
  return {
    type: "SET_VISIBILITY_FILTER",
    payload: visibilityFlag
  };
};
