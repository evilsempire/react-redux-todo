import React from "react";

import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";
import Filter from "./Filter";

class App extends React.Component{
    render(){
        return (
            <div>
                <AddToDo />
                <ToDoList />
                <Filter />
            </div>
        )
    }
}

export default App;