

//ADD TO DO ACTION
export const addToDo = (taskName) => {
    return {
        type: "ADD_TODO",
        payload: taskName
    }
}

//toggle todo
export const toggleToDo = (id) => {
    return {
        type: "TOGGLE_TODO",
        payload: id
    }
}

//visibility filter 
export const setVisibilityFilter = (visibilityFlag) => {
    return {
        type: "SET_VISIBILITY_FILTER",
        payload: visibilityFlag
    }
}