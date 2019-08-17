//GET TO FO ACTION LIST
export const getToDoList = (todo) => {
    return {
        type: "GET_TO_DO_LIST",
        payload:todo
    }
}

//ADD TO DO ACTION
export const addToDo = (taskName) => {
    return {
        type: "ADD_TODO",
        payload: taskName
    }
}



