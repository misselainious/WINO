import React from "react";
import { Button, Grid, Header } from "semantic-ui-react";


function TeamMemberCard(props) {
  return (
    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
      <Header as='h3' style={{ fontSize: '1.5em' }}>
        {props.member.name}
      </Header>
      <p style={{ fontSize: '1em' }}>
        { `(${props.member.region})` }
      <br />
        { `${props.member.email} • ${props.member.phone}` }
      </p>
      <Button onClick={() => props.openModal(props.member)}>More Info</Button>
    </Grid.Column>
  );
}

export default TeamMemberCard;
