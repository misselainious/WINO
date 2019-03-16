import React from "react";
import HomeHeading from "../components/Homepage/HomeHeading/HomeHeading";

import {
    Grid,
    Header,
    Image,
    Segment,
} from 'semantic-ui-react';

const Greenwood = () => (

    <React.Fragment>

        <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                            Greenwood Simon, Principal
                </Header>
                        <p style={{ fontSize: '1em' }}>
                            Brian Greenwood burst onto the wine scene in Cambridge, Massachusetts at the now defunct Cave Atlantique, long before most of you were born. His memories of that halcyon year return more to exploring the glories of Loire Chenin and Cantonese food (or lobster and champagne) with his tasting group than to the training he received, which was cursory at best. Given no grounding in the classics, he made his way to California wines and fairly quickly to our fair state. He worked four years in retail before joining a California winery /brokerage as both a salesperson and member of the wine making team; the fact that he was uniquely unqualified for either seems to have gone unnoticed by his partners.
                                        <br />
                            We flash forward through the years to a visit to Vin Expo, where a fluke of destiny (a new partner, an illness) led to his appointment as Import Director in charge of building a portfolio for what was now a winery and distribution company. Through the next ten + years he built up that portfolio, doing both his own selections from France and Italy and working with a number of past and future stars of the wine world. Eventually the tensions between the needs of a winery and those of a distributor came to a head, and Brian moved on to start his own business.
                                        <br />
                            Or did he? Twenty years of tasting with Hiram Simon and Paul Marcus led to the offer of a new opportunity, and he recently celebrated his 14th year with the partnership, recently re-dedicated to building a company based almost entirely on their own imports.
                                </p>
                    </Grid.Column>

                    <Grid.Column floated='right' width={6}>
                        <Image bordered rounded size='large' src='/images/BrianGreenwood.jpg' />
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </Segment>
    </React.Fragment>
)

export default Greenwood;
