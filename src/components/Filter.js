import React from "react";

class Filter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            visibilityFilter: "ALL"
        }
    }

    toggleFilter = (filterName) => {
        console.log("filterName", filterName)
    }

    render(){
        return (
            <div>
                <label>
                Filter :
                </label>
                <div className="filtersBar">
                <p onClick={() => this.toggleFilter("ALL")}>
                    All
                </p>
                <p onClick={() => this.toggleFilter("COMPLETED")}>
                    Completed
                </p>
                <p onClick={() => this.toggleFilter("INCOMPLETED")}>
                    InCompleted
                </p>
                </div>

            </div>
        )
    }
}

export default Filter;