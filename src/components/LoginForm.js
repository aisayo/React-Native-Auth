import React, { Component } from 'react';
import { Button, Card, CardItem, Input } from './common';


class LoginForm extends Component {
    state = { text: '' };

	render() {
		return (
			<Card>
				<CardItem>
                    <Input 
                        label="Email"
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
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