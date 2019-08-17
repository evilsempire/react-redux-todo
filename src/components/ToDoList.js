import React from "react";
import {connect} from "react-redux";

// import {getToDoList} from "../actions"

class ToDoList extends React.Component{

    constructor(props){
        super(props)
    }

    


    render(){
const {todo} = this.props;
        return (
           <ul>
               {
                   todo.length ? todo.map((listItem, index) => <li key={index}>{listItem.taskName}</li>): "No Tasks present"
               }
           </ul>
        
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(ToDoList);