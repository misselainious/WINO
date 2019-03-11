import React from "react";
import { Grid } from "semantic-ui-react";
import salesTeamMembers from "../../salesTeam.json";



function TeamMembersContainer(props) {
    return (
        <Container>
            <Grid>
{}  salesTeamMembers && ()
                  
                
            </Grid>
        </Container>

    )
}

export default TeamMembersContainer;

/**
 * 0 = new segment
 * index % 2 = 0 = new segment
 */