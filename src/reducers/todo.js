const initialState = [];

//function
export default function(state = initialState, action){
    switch (action.type) {
        case "ADD_TODO":


            return [
                ...state,{
                    taskName: action.payload,
                    id: Math.random(),
                    completed: false
                }
            ]
             
        case "GET_TO_DO_LIST": return action.payload

        default:
            return state;
    }
}