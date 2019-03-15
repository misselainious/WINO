import React from "react";
import HomeHeading from "../components/Homepage/HomeHeading/HomeHeading";
import Modal from "../components/SalesTeam/Modal/Modal";

import {
    Button,
    Grid,
    Header,
    Image,
    Segment,
} from 'semantic-ui-react';
import SalesTeamModal from "../components/SalesTeam/Modal/Modal";
import TeamMemberCard from '../components/SalesTeam/TeamMemberCard'
import TeamMembersContainer from '../components/SalesTeam/TeamMembersContainer';

class AboutUs extends React.Component {
    state = {
        modal: false,
        currentMember: null,
    }

    handleOpenModal = member => {
        this.setState({ modal: true, currentMember: member });
    }

    handleCloseModal = () => {
        this.setState({ modal: false, currentMember: null });
    }

    render() {
        const { modal, currentMember } = this.state;
        return (
            <React.Fragment>

                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    Hiram Simon, Principal
                </Header>
                                <p style={{ fontSize: '1em' }}>
                                    Hiram Simon began his career relatively late in the last century at The Wine Society, a unique English institution owned entirely by its customers – one of the few remaining Co-operative Societies in Britain, which is today still the pre-eminent mail-order and internet retailer. The man whose job he coveted just  retired recently.  Not, however, before obtaining a brilliant training in the basics i.e. Bordeaux, Burgundy and Champagne, with the occasional leavening of Sherry, Rhône and German Riesling, or, on exotic days, Chianti and Rioja. Despite the proto-socialist character of the place (famed leftist Edmund Penning-Rowsell was its long-serving Chairman), daily drinking consisted mostly of aged classed-growth Bordeaux and fine burgundy. After debunking to London for an especially unhappy year at an advertising agency, he came to California, specifically Berkeley (his home to this day), on Labor Day, 1982.
                                    <br/>
                                    The next six years or so were spent toiling in the hard but not-unfruitful soils of direct sales of mostly German wines to private consumers in office or home settings. Some of the relationships formed in those days remain intact now. In 1989, he started his own company, WineWise, with the help of Paul Marcus, who remained a partner until 2017. Initially created to serve the needs of his private customers, it morphed in the mid-1990’s into a wholesale import company. The twin pedestals of WineWise’s activities have always been France, particularly the profusion of what we used to call French Country Wines (in other words, normal wines for normal people) and Germany.
                                    <br/>
                                    A major turning point came in 1993 when Hiram met famed importer and raconteur Terry Theise for the first time. This relatively chance encounter had a transformative effect. Very soon, WineWise was appointed the California distributor for Terry’s nascent Austrian portfolio (The Vienna Wine Company was the name chosen for that “division”). Soon thereafter, the German wines joined the book and, when Terry took the plunge into the untested waters of Grower Champagne, it was natural that WineWise would be the distributor of those miraculous wines, too. The relationship with Terry, forged on numerous tasting trips in Europe and visits to California, has developed way beyond commerce into the area of profound personal friendship which has survived the ending of our direct commercial relationship.
                                    <br/>
                                    In subsequent years, the company has judiciously added new countries of interest to the range: first Spain, where the undreamt-of opportunity to import the supernal wines of López de Heredia arose in 2004, and then Greece, whose breathtakingly original wines have been a passionate interest for many years. The most recent acquisition has been Portugal, the originality, quality and value of whose best wines cannot be bettered anywhere.
                                </p>

                            </Grid.Column>
                            <Grid.Column floated='right' width={6}>
                                <Image bordered rounded size='large' src='/images/HiramFlipped.png' />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column textAlign='center'>
                                <Button className="seeAllWinesBtn" size='small'>
                                    <p className="seeAllWinesText">Read More</p>
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    {/* // testing section here */}
                    <Segment style={{ padding: '8em 0em' }} vertical>
                        <Grid container stackable verticalAlign='middle'>
                            <Grid.Row>
                                <Grid.Column floated='left' width={6}>
                                    <Image bordered rounded size='large' src='/images/BrianGreenwood.jpg' />
                                </Grid.Column>

                                <Grid.Column floated='right' width={8}>
                                    <Header as='h3' style={{ fontSize: '2em' }}>
                                        Brian Greenwood, Principal
                </Header>
                                    <p style={{ fontSize: '1em' }}>
                                        Brian Greenwood burst onto the wine scene in Cambridge, Massachusetts at the now defunct Cave Atlantique, long before most of you were born. His memories of that halcyon year return more to exploring the glories of Loire Chenin and Cantonese food (or lobster and champagne) with his tasting group than to the training he received, which was cursory at best. Given no grounding in the classics, he made his way to California wines and fairly quickly to our fair state. He worked four years in retail before joining a California winery /brokerage as both a salesperson and member of the wine making team; the fact that he was uniquely unqualified for either seems to have gone unnoticed by his partners.
                                        <br/>
                                        We flash forward through the years to a visit to Vin Expo, where a fluke of destiny (a new partner, an illness) led to his appointment as Import Director in charge of building a portfolio for what was now a winery and distribution company. Through the next ten + years he built up that portfolio, doing both his own selections from France and Italy and working with a number of past and future stars of the wine world. Eventually the tensions between the needs of a winery and those of a distributor came to a head, and Brian moved on to start his own business.
                                        <br/>
                                        Or did he? Twenty years of tasting with Hiram Simon and Paul Marcus led to the offer of a new opportunity, and he recently celebrated his 14th year with the partnership, recently re-dedicated to building a company based almost entirely on their own imports.
                                </p>

                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column textAlign='center'>
                                <Button className="seeAllWinesBtn" size='small'>
                                    <p className="seeAllWinesText">Read More</p>
                                </Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>


                    <Segment style={{ padding: '0em' }} vertical>
                        <Grid celled='internally' columns='equal' stackable>
                            <Grid.Row textAlign='center'>
                                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                    <Header as='h3' style={{ fontSize: '2em' }}>
                                        Primary Contacts
                </Header>
                                    <p style={{ fontSize: '1.33em' }}>Hiram Simon • hiram@winewise.biz • 510.848.6879
                            <br />
                                        Brian Greenwood • brian@winewise.biz • 510.524.2270
                            </p>
                                </Grid.Column>
                                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                    <Header as='h3' style={{ fontSize: '2em' }}>
                                        Order Desk
                </Header>
                                    <p style={{ fontSize: '1.33em' }}>
                                        {/* <Image avatar src='./images/winecorks.jpg' /> */}
                                        <b>Elaine Cadman</b> • orders@winewise.biz • 510.473.5482
                                    <br />
                                        <Image avatar src='./images/winecorks.jpg' />
                                    </p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>


                    <TeamMembersContainer handleOpenModal={this.handleOpenModal} />


                    <SalesTeamModal open={modal} member={currentMember} closeModal={this.handleCloseModal} />

                </Segment>
            </React.Fragment>
        )
    }
}


export default AboutUs;
