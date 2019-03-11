import React from "react";
import { Grid } from "semantic-ui-react";
import salesTeamMembers from "../../salesTeam.json";
import TeamMemberCard from "./TeamMemberCard";

const teamMemberCards = salesTeamMembers.map((member, i) => {
    return <TeamMemberCard key={i} {...member} />
});

const pairs = [];
for (let i=0; i < teamMemberCards.length; i+=2) {
    let first = teamMemberCards[i];
    let second = teamMemberCards[i+1];
    pairs.push([first, second]);
};


function TeamMembersContainer(props) {
    return (
        <Container>
            <Grid>
            { pairs && (
                pairs.map((pair, i) => {
                    return (
                        <Segment style={{ padding: '0em' }} vertical>
                            <Grid celled='internally' columns='equal' stackable>
                                <Grid.Row textAlign='center'>
                                
                                </Grid.Row>
                            </Grid>
                        </Segment>
                    )
                })
            ) }
            </Grid>
        </Container>

    )
}

export default TeamMembersContainer;

/**
 * 0 = new segment
 * index % 2 = 0 = new segment
 */