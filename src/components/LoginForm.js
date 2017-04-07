import React, { Component } from 'react';
import { Alert, ToastAndroid } from 'react-native';
import firebase from 'firebase';

import { AppButton, AppForm, AppTextField, AppSpinner } from '../commons';

export default class LoginForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			loading: false
		}		
	}


	onButtonPress() {
		//ToastAndroid.show(`email: ${this.state.email} password: ${this.state.password}`, ToastAndroid.SHORT);
		
		this.setState({ loading: true }); //show spinne on button press

		const { email, password } = this.state;
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(() => this.onLoginSuccess())
			.catch(() => { //create account if user sign in fails
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(() => this.onLoginSuccess())
					.catch(() => this.onLoginFailed())
			});
	}

	onLoginFailed() {
		Alert.alert("Authentication Failed", "There's an error creating your account.");
		this.setState({ loading: false });
	}

	onLoginSuccess(){
		this.setState({
			email: '',
			password: '',
			loading: false
		});

		ToastAndroid.show("Login Success", ToastAndroid.SHORT);
	}

	// if state is loading, show Spinner, else return Button
	renderButton(){
		if(this.state.loading){
			return <AppSpinner />
		}

		return (
			<AppButton
			 buttonType={"block"}
			 buttonLabel={"Sign In"}
			 onPress={() => this.onButtonPress() }
			/>
		);
	}


	render() {
		//const { email, password } = this.state;
		return (
			<AppForm>
				<AppTextField
				 label={"Email"} 
				 value={this.state.email}
				 secureTextEntry={false}
				 onChangeText={ email => this.setState({email}) } //es6 for {email: email}
				/>
				<AppTextField
				 label={"Password"}
				 value={this.state.password}
				 secureTextEntry={true}
				 onChangeText={password => this.setState({password}) } //es6 for {password: password}
				 />

				{this.renderButton()}

			</AppForm>
		);
	}
}