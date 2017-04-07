import React, { Component } from 'react';
import { Container } from 'native-base';
import firebase from 'firebase';

import AppHeader from './components/Header';
import LoginForm from './components/LoginForm';

import { AppButton, AppForm, AppSpinner } from './commons';


export default class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
	    apiKey: 'AIzaSyDx9mVchL_TPpWjA335qoBQWtjsi4keZvs',
	    authDomain: 'auth-2906c.firebaseapp.com',
	    databaseURL: 'https://auth-2906c.firebaseio.com',
	    projectId: 'auth-2906c',
	    storageBucket: 'auth-2906c.appspot.com',
	    messagingSenderId: '4748990261'
	  });

		this.state = { logged_in: null };

		firebase.auth().onAuthStateChanged((user) => {
			if (user)
				this.setState({ logged_in: true});
			else
				this.setState({ logged_in: false });
		});
	}

	renderContent(){
		switch(this.state.logged_in) {
			case true:
				return (
					<AppForm>
						<AppButton
						 onPress={() => firebase.auth().signOut()}
					 	 buttonLabel={"Sign Out"}
						/>
					</AppForm>
				);
			case false:
				return <LoginForm />
			default:
				return <AppSpinner />
		}
	}

	render() {
		return(
			<Container>
				<AppHeader />
				{ this.renderContent() }
				
			</Container>
		);
	}
}