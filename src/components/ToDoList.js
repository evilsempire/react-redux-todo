import React from "react";
import {connect} from "react-redux";

import {toggleToDo} from "../actions"

class ToDoList extends React.Component{

    constructor(props){
        super(props)
    }

    
    getList = () => {
        const {todo} = this.props;

        return <ul>
        {
            todo.length ? todo.map((listItem, index) => 
                <li 
                    className={`cursor-pointer  ${listItem.completed ? 'strike': null}`}   
                    key={listItem.id}
                    onClick = {(e) => this.props.toggleToDo(listItem.id)}
                    >{listItem.taskName}</li>
                ): 
                
                "No Tasks present"
        }
    </ul>
    }

    render(){
        return this.getList();
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps,{toggleToDo})(ToDoList);