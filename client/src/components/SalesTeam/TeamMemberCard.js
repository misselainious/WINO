import React from "react";
import { Grid } from "semantic-ui-react";


function TeamMemberCard(props) {
  return (
    <Grid className="card">
      <Grid.Row className="content">
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
      </Grid.Row>
      
    </Grid>
  );
}

export default TeamMemberCard;
