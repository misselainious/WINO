import React from "react";
import { Button, Card, Grid, Header } from "semantic-ui-react";


function TeamMemberCard(props) {
  return (
    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
      <Header as='h3' style={{ fontSize: '1.5em' }}>
        {props.name}
      </Header>
      <p style={{ fontSize: '1em' }}>
        { `(${props.region})` }
      <br />
        { `${props.email} • ${props.phone}` }
      </p>
      <Button>More Info</Button>
    </Grid.Column>
  );
}

export default TeamMemberCard;
