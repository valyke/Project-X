import React, { Component } from 'react';
import { Content, Header, Left, Body, Right, Title } from 'native-base';

export default class AppHeader extends Component {
	render() {
		return (
			<Header>
				<Left />
				<Body>
					<Title>Project X</Title>
				</Body>
				<Right />
			</Header>
		);
	}
}