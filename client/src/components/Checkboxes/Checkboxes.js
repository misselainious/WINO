import React from "react"
import "./Checkboxes.css"
// it should take in an array of attributes and an onlick fuction 
const Checkboxes = props =>{
    const checkboxArray = props.checkables.map( (checkable,i )=> <div key={i.toString()}>
        <input type="checkbox" value ={checkable}  /> {checkable}
    </div>)
    return <div className="checkboxContainer">
        {checkboxArray}
    </div>
}

export default Checkboxes
 