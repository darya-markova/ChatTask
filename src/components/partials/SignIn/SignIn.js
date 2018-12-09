import React, { Component } from 'react';
import {
    Segment,
    Button,
    Form,
    Header,
    Message
} from 'semantic-ui-react';

import './SignIn.css';

class SignIn extends Component {
    state = {
        currentUser: ''
    };

    isUsernameValid = () => {
        return this.state.currentUser.length < 33;
    };

    isUsernameEmpty = () => {
        return this.state.currentUser.length < 1;
    };

    onUsernameChange = ({target}) => {
        this.setState({
            currentUser: target.value
        });
    };

    onSignIn = () => {
        this.props.onUserSignedIn(this.state.currentUser);
    };

    render() {
        const errorLabel = !this.isUsernameValid() && <span className='errorLabel'>Incorrect username</span>;

        return (
            <Segment className='signInContainer'>
                <Header as='h3'>Simple chat</Header>

                {errorLabel}

                <Form unstackable>
                    <Form.Input
                        placeholder='username'
                        onChange={this.onUsernameChange}/>
                    <Button
                        primary
                        type='submit'
                        disabled={!this.isUsernameValid() || this.isUsernameEmpty()}
                        onClick={this.onSignIn}>
                        Join
                    </Button>
                </Form>
            </Segment>
        )
    }
}
export default SignIn;