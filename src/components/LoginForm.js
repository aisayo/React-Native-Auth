import React, { Component } from 'react';
import { Button, Card, CardItem, Input } from './common';


class LoginForm extends Component {
    state = { email: '' };

	render() {
		return (
			<Card>
				<CardItem>
                    <Input 
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeEmail={email => this.setState({ email })}
                    />
				</CardItem>

				<CardItem></CardItem>

				<CardItem>
					<Button>
                        Log In
					</Button>
				</CardItem>
			</Card>
		);
	}
}

export default LoginForm;