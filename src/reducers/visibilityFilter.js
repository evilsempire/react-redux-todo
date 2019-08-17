import _ from "lodash";

export default function(state="ALL", action){
    switch(action.type){
        case "SET_VISIBILITY_FILTER": 

        return action.payload;
        default:
        return state
    }
}