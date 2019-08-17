import React from "react";

class AddToDo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value:""
        }
    }


    submitForm = (e) => {
        e.preventDefault();
        console.log("this.state", this.state)
    }


    render(){
        return (
            <form onSubmit={(e) => this.submitForm(e)}>
                <label>
                    Task:
                </label>
                <input type="text" value={this.state.value} onChange= {e => this.setState({
                    value: e.target.value
                })}/>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}

export default AddToDo;