import React, { Component } from 'react';
import { Button, Card, CardItem, Input } from './common';


class LoginForm extends Component {
    state = { email: '', password: '' };

	render() {
		return (
			<Card>
				<CardItem>
                    <Input 
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
				</CardItem>

				<CardItem>
                    <Input 
                        label="Password"
                        placeholder="password"
                        value={this.state.password}
                        onChangePassword={password => this.setState({ password })}
                    />
                </CardItem>

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