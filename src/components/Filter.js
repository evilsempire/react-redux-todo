import React from "react";

class Filter extends React.Component{
    render(){
        return (
            <div>
                <label>
                Filter :
                </label>
                <div className="filtersBar">
                <p>
                    All
                </p>
                <p>
                    Completed
                </p>
                <p>
                    InCompleted
                </p>
                </div>

            </div>
        )
    }
}

export default Filter;