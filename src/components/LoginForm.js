import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardItem, Input } from './common';


class LoginForm extends Component {
    state = { email: '', password: '', error: '' };

    onButtonPress() {
        const { email, password } = this.state;
        //this statement returns a promise
        firebase.auth().signInWithEmailAndPassword(email, password)
            //catch statement, says if request fails then enter this function

            .catch(() => {
                //asynchronous method. also returns a promise
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({ error: 'Authentication Failed.'});

                    }); 
            });
    }

	render() {
		return (
			<Card>
				<CardItem>
                    <Input 
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email.value}
                        onChangeEmail={email => this.setState({ email })}
                    />
				</CardItem>

				<CardItem>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        value={this.state.password.value}
                        onChangePassword={password => this.setState({ password })}
                    />
                </CardItem>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

				<CardItem>
					<Button onPress={this.onButtonPress.bind(this)}>
                        Log In
					</Button>
				</CardItem>
			</Card>
		);
	}
}

const styles= {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;