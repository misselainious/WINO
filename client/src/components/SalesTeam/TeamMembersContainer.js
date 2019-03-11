import React from "react";
import { Button, Container, Segment, Grid } from "semantic-ui-react";
import salesTeamMembers from "../../salesTeam.json";
import TeamMemberCard from "./TeamMemberCard";


function pairTeamMembers() {
    const teamMemberCards = salesTeamMembers.map((member, i) => {
        return <TeamMemberCard key={i} {...member} />
    });
    
    const pairs = [];
    for (let i=0; i < teamMemberCards.length; i+=2) {
        let first = teamMemberCards[i];
        let second = teamMemberCards[i+1];
        pairs.push([first, second]);
    };
    return pairs;
}

function TeamMembersContainer(props) {
    const pairs = pairTeamMembers();
    return (
        <Container>
            <Grid>
                <Grid.Column
                    textAlign='center'>
                    <Button size='huge'>Sales Team</Button>
                </Grid.Column>
            </Grid>
            { pairs && (
                pairs.map((pair, i) => {
                    return (
                        <Segment style={{ padding: '0em' }} vertical key={i}>
                            <Grid celled='internally' columns='equal' stackable>
                                <Grid.Row textAlign='center'>
                                    {pair[0]}
                                    {pair[1]}
                                </Grid.Row>
                            </Grid>
                        </Segment>
                    )
                })
            ) }
        </Container>

    )
}

export default TeamMembersContainer;

/**
 * 0 = new segment
 * index % 2 = 0 = new segment
 */