import React from "react"
import { Grid } from 'semantic-ui-react';
import "./Checkboxes.css"
// it should take in an array of attributes and an onlick fuction 
const Checkboxes = props =>{
    const checkboxArray = props.checkables.map( (checkable,i )=> <Grid key={i.toString()}>
        <input type="checkbox" value ={checkable}  /> {checkable}
    </Grid>)
    return <Grid className="checkboxContainer">
        {checkboxArray}
    </Grid>
}

export default Checkboxes;
 