import React from "react"
import CheckBoxes from "../Checkboxes/Checkboxes"
import "./CheckboxSidebar.css"
const CheckboxSidebar = props =>{
    const checkboxArray = props.checkableArrays.map( (arry,i) => {
        return <CheckBoxes checkables={arry} key={parseInt(i)}/>
    })
    return <div className="sidebar">{checkboxArray}</div>
}


export default CheckboxSidebar