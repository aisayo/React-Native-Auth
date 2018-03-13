import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardItem, Input, Spinner } from './common';


class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    //when the login button is pressed, it fires off this helper
    //method. this helper method receives an email and a password
    //it then sends it down the authentication flow. if no login is 
    //found, authentication error comes up. 
    onButtonPress() {
        const { email, password } = this.state;
        //this clears authentication error if user
        //enters login info again
        this.setState({ error: '', loading: true});
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

    renderButton() {
        if (this.state.loading) {
            return <Spinner size={"small"}/>;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                        Log In
			</Button>
        );
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
					{this.renderButton()}
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