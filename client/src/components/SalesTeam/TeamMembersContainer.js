import React from "react";
import { Button, Container, Divider, Segment, Grid } from "semantic-ui-react";
import salesTeamMembers from "../../salesTeam.json";
import TeamMemberCard from "./TeamMemberCard";


function pairTeamMembers(modalFn) {
    const teamMemberCards = salesTeamMembers.map((member, i) => {
        return <TeamMemberCard key={i} member={member} openModal={modalFn} />
    });

    const pairs = [];
    for (let i = 0; i < teamMemberCards.length; i += 2) {
        let first = teamMemberCards[i];
        let second = teamMemberCards[i + 1];
        pairs.push([first, second]);
    };
    return pairs;
}

function TeamMembersContainer(props) {
    const pairs = pairTeamMembers(props.handleOpenModal);
    return (
        <Container>
            <Grid>
                <Grid.Column textAlign='center'>

                    {/* <Button className="seeAllWinesBtn" size='small'>
                        <p className="seeAllWinesText">Sales Team</p></Button> */}
                    <Divider
                        as='h2'
                        className='header'
                        horizontal
                        style={{ margin: '1em 0em', textTransform: 'uppercase' }}>
                        <a href=''>SALES TEAM</a>
                    </Divider>

                </Grid.Column>
            </Grid>
            {pairs && (
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
            )}
        </Container>

    )
}

export default TeamMembersContainer;

/**
 * 0 = new segment
 * index % 2 = 0 = new segment
 */