import React, { Component } from "react";
import CheckBoxes from "../Checkboxes/Checkboxes";
import "./CheckboxSidebar.css";

//need to make pull request 

class CheckboxSidebar extends Component {

    render() {
        const checkboxArray = this.props.checkableArrays.map((arry, i) => {
            return <CheckBoxes checkables={arry.elements} filterType={arry.filterType} key={parseInt(i)} handleFilterChange={this.props.handleFilterChange} />
        })

        return <div className="sidebar">{checkboxArray}</div>
    }
}


export default CheckboxSidebar