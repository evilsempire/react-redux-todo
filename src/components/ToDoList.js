import React from "react";

const demoList = ["test1", "test2", "test3"];

class ToDoList extends React.Component{
    render(){
        return (
           <ul>
               {
                   demoList.map((listItem, index) => <li key={index}>{listItem}</li>)
               }
           </ul>
        )
    }
}

export default ToDoList;