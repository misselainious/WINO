import React from "react";
import HomeHeading from "../components/Homepage/HomeHeading/HomeHeading";

import {
    Button,
    Grid,
    Header,
    Image,
    Segment,
} from 'semantic-ui-react';

const Hiram = () => (
  
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

                        </Grid>
                    </Segment>
            </React.Fragment>
)

export default Hiram;
