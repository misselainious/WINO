import React from "react";
import { Grid, Segment, Container, List, Header } from "semantic-ui-react";
import "./Footer.css"
const Footer = props => {
    const fixed = props.fixed;
    const footerStyle = {
        // position: "fixed",
        // bottom: "0px",
        // width:"100%",
        padding: "2.1em 0em"

}
return (
    <Segment fixed={fixed ? 'bottom' : null}
        inverted vertical style={footerStyle}
        className="footerColor"
        // color='black'
        >
        <Container>
            <Grid divided inverted stackable>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='About' />
                        <List link inverted>
                            <List.Item as='a'>Contact Us</List.Item>
                            <List.Item as='a'>Sales Team</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='Services' />
                        <List link inverted>
                            <List.Item as='a'>Wine Wholesale</List.Item>
                            <List.Item as='a'>How To Access</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header as='h4' inverted>
                            Address
        </Header>
                            5655 College Avenue, Oakland CA 94618
                                <br />
                            (phone) 510.848.6879 • (fax) 510.848.6880
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </Segment>
)
}

export default Footer;