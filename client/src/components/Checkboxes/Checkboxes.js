import React from "react"
import { Grid } from 'semantic-ui-react';
import "./Checkboxes.css"

// it should take in an array of attributes and an onlick fuction 
const Checkboxes = props =>{
    const checkboxArray = props.checkables
        .map( (checkable,i )=> (
            <Grid.Row key={i.toString()}>
                <input type="checkbox" value ={checkable} onChange={props.handleFilterChange} /> {checkable}
            </Grid.Row>
        ))
    return (
        <Grid.Row className="checkboxContainer">
            {checkboxArray}
        </Grid.Row>
    )
}

export default Checkboxes;
