import React from "react";
import { Grid } from "semantic-ui-react";

function TeamCard(props) {
  return (
    <Grid className="card">
      <Grid className="img-container">
        <img alt={props.name} src={props.image} />
      </Grid>
      <Grid className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Region:</strong> {props.region}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li>
            <strong>Phone:</strong> {props.phone}
          </li>
        </ul>
      </Grid>

      {/* need to make this an onClick to pop up modal */}
      <Button onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </Button>
    </Grid>
  );
}

export default TeamCard;
