import React, { Component, Fragment } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

import AuthService from '../components/login/AuthService';

class Login extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.decode = this.decode.bind(this);
        this.Auth = new AuthService();
    }
    render() {
        // console.log('this login', this);

        return (
            <Fragment>
                <Grid textAlign='center' style={{ height: '475px' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' textAlign='center'>
                            {/* <Image src='/logo.png' />  */}
                            Log-in to Your Account
                    </Header>
                        <Form size='large' onSubmit={this.handleFormSubmit}>
                            <Segment stacked>
                                <Form.Input fluid icon='user' name="username" iconPosition='left' placeholder='E-mail address' onChange={this.handleChange} />
                                <Form.Input
                                    fluid
                                    name="password"
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={this.handleChange}
                                />

                                <Button className="seeAllWinesBtn" size='small'>
                                    <p className="seeAllWinesText" fluid size='large'>
                                        Login
                            </p></Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Fragment>
        );
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
        // console.log(this);
    }

    handleFormSubmit(e) {
        e.preventDefault();

        this.Auth.login(this.state.username, this.state.password)
            .then(res => {
                this.props.history.replace('/admin');
            })
            .catch(err => {
                alert(err);
            })
    }

    decode(e) {
        e.preventDefault();
        this.Auth.loggedIn()
    }
}

export default Login;