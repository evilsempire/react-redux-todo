import React from "react";
import {connect } from "react-redux";

//import action
import {addToDo} from "../actions"

class AddToDo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            value:"",
            error: ""
        }
    }


    submitForm = (e) => {
        e.preventDefault();
        const {value, error} = this.state;

        if(value !== ""){
             //run action function
        this.props.addToDo(value);

        //now make the value empty
        this.setState({
            value: "",
            error: ""
        })
        }else{
            this.setState({
                error: "Please type something!"
            })
        }
    }


    render(){
        return (
            <form onSubmit={(e) => this.submitForm(e)}>
              
                
                <div className="ui fluid action input">
                <input type="text" placeholder="Add Todo" value={this.state.value} onChange= {e => this.setState({
                    value: e.target.value
                })}/>
                <button class="ui button" type="submit">Submit</button>
                </div>
                {this.state.error !== "" ? <div>{this.state.error}</div>: null}
            </form>
        )
    }
}



export default connect(null,{addToDo})(AddToDo);