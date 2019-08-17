import React from "react";
import {connect} from "react-redux";

import {setVisibilityFilter} from "../actions";

class Filter extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            visibilityFilter: "ALL"
        }
    }


    render(){
        const { visibilityFilter} = this.props;
        return (
            <div>
                <label>
                Filter :
                </label>
                <div className="filtersBar">
                <p className={visibilityFilter === "ALL" ? 'active': null} onClick={() => this.props.setVisibilityFilter("ALL")} >
                    All
                </p>
                <p className={visibilityFilter === true ? 'active': null} onClick={() => this.props.setVisibilityFilter(true)}>
                    Completed
                </p>
                <p className={visibilityFilter === false ? 'active': null} onClick={() => this.props.setVisibilityFilter(false)}>
                    InCompleted
                </p>
                </div>

            </div>
        )
    }
}


const mapStateToProps = ({visibilityFilter}) => {
    return {visibilityFilter};
}

export default connect(mapStateToProps, {setVisibilityFilter})(Filter);