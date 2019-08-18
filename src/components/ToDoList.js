import React from "react";
import {connect} from "react-redux";

import {toggleToDo} from "../actions"

class ToDoList extends React.Component{

    constructor(props){
        super(props)
    }

    
    getList = () => {
        const {todo,visibilityFilter} = this.props;

        let todoList ;
        //Now based on the filter we need to make the todolist
        switch(visibilityFilter){
            case "ALL": 
                todoList = todo;
                break;

                case true:
                    todoList = todo.filter(item => item.completed === true);
                    break;

                case false:
                        todoList = todo.filter(item => item.completed === false);
                    break;
        }

        return <ul>
        {
            todoList.length ? todoList.map((listItem, index) => 
                <li 
                    className={`cursor-pointer ui floating message  ${listItem.completed ? 'strike': null}`}   
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
    const {todo, visibilityFilter} = state

    return {todo, visibilityFilter};
}

export default connect(mapStateToProps,{toggleToDo})(ToDoList);